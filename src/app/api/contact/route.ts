export const runtime = 'edge';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, typology, website, turnstileToken } = body;

    // 1. Cloudflare Edge Telemetry & Geographical Context
    const country = request.headers.get('cf-ipcountry') || 'IN';
    const city = request.headers.get('cf-ipcity') || 'Unknown City';
    const rayId = request.headers.get('cf-ray') || 'N/A';
    const clientIp = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '127.0.0.1';

    // 2. Honeypot check: If the hidden 'website' field is filled out, it's a bot.
    if (website) {
      console.log(`[SPAM BLOCKED] Bot detected via honeypot field. Name: ${name}, Ray: ${rayId}`);
      return NextResponse.json({ success: true, message: "Lead successfully logged" });
    }

    // 3. Optional Cloudflare Turnstile Server-Side Validation
    const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
      try {
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(turnstileToken)}&remoteip=${encodeURIComponent(clientIp)}`,
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          console.warn(`[TURNSTILE REJECTED] Bot detected. Ray: ${rayId}`);
          return NextResponse.json({ error: "Security check failed. Please refresh and try again." }, { status: 403 });
        }
      } catch (err) {
        console.error("Turnstile verification error:", err);
      }
    }

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and Phone are required" }, { status: 400 });
    }

    const isNRI = ['AE', 'US', 'GB', 'SG', 'AU', 'CA', 'QA', 'SA'].includes(country);

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwKPSo6EIza30iuD-nMQfcRMLKUDbolQaQkZWk6VCR0KHYXQ54YWCJC2ZcnYX0kCzcJyg/exec";

    // Dispatch enriched lead to Google Apps Script / CRM
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      body: JSON.stringify({
        name,
        phone,
        email,
        typology: typology || "General Inquiry",
        country,
        city,
        isNRI: isNRI ? "YES" : "NO",
        rayId,
        source: "Cloudflare Edge - supremesvillagio.com",
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`Google Script returned ${response.status}`);
    }

    const data = await response.json().catch(() => ({}));
    
    if (data.error) {
      throw new Error(data.error);
    }

    return NextResponse.json({ 
      success: true, 
      message: "Lead successfully recorded and routed",
      meta: { country, isNRI, rayId }
    });
  } catch (error: any) {
    console.error("Error sending lead to Google Script:", error);
    return NextResponse.json({ error: "Failed to send lead. Please try again or call +91 7744009295 directly." }, { status: 500 });
  }
}
