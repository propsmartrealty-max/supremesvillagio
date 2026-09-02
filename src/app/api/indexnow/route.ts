import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const host = 'www.supremesvillagio.com';
    const key = 'd66htbxvzotmo';
    const keyLocation = `https://${host}/d66htbxvzotmo.txt`;

    const body = await request.json().catch(() => ({}));
    const urls: string[] = body.urls || [
      `https://${host}/`,
      `https://${host}/supreme-villagio-rera`,
      `https://${host}/supreme-villagio/price`,
      `https://${host}/supreme-villagio/emi-calculator`,
      `https://${host}/supreme-villagio/4-bhk-villas`,
      `https://${host}/supreme-villagio/5-bhk-villas`,
      `https://${host}/supreme-villagio/townhouses`,
      `https://${host}/supreme-villagio/floor-plans`,
      `https://${host}/supreme-villagio/master-plan`,
      `https://${host}/supreme-villagio/possession`,
      `https://${host}/supreme-villagio/nri-guide`,
      `https://${host}/supreme-villagio/location`,
      `https://${host}/supreme-villagio/investment`,
      `https://${host}/somatane-real-estate`,
      `https://${host}/talegaon-real-estate`,
      `https://${host}/luxury-villas-pune`,
      `https://${host}/villas-in-somatane`,
      `https://${host}/talegaon-luxury-villas`,
      `https://${host}/villas-near-mumbai-pune-expressway`,
      `https://${host}/supreme-villagio-vs-paranjape-forest-trails`,
      `https://${host}/somatane-vs-hinjewadi`,
      `https://${host}/somatane-vs-talegaon`,
      `https://${host}/villas-vs-apartments-pune`,
    ];

    const indexNowPayload = {
      host,
      key,
      keyLocation,
      urlList: urls,
    };

    // Broadcast to IndexNow API (Bing / Yandex / Naver)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(indexNowPayload),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      submittedCount: urls.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'IndexNow edge endpoint active',
    host: 'www.supremesvillagio.com',
    keyLocation: 'https://www.supremesvillagio.com/d66htbxvzotmo.txt',
  });
}
