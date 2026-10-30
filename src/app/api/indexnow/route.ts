export const runtime = 'edge';
import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'c2e5a8f4b1d64e97a3b2c1d0e5f4a6b7';
const HOST = 'www.supremesvillagio.com';

const CANONICAL_URLS = [
  'https://www.supremesvillagio.com/',
  'https://www.supremesvillagio.com/supreme-villagio-somatane',
  'https://www.supremesvillagio.com/ecosystem',
  'https://www.supremesvillagio.com/contact',
  'https://www.supremesvillagio.com/resale',
  'https://www.supremesvillagio.com/banks',
  'https://www.supremesvillagio.com/supreme-villagio/contact',
  'https://www.supremesvillagio.com/supreme-villagio/banks',
  'https://www.supremesvillagio.com/supreme-villagio/resale',
  'https://www.supremesvillagio.com/supreme-villagio/reviews',
  'https://www.supremesvillagio.com/supreme-villagio/price',
  'https://www.supremesvillagio.com/supreme-villagio/4-bhk-villas',
  'https://www.supremesvillagio.com/supreme-villagio/5-bhk-villas',
  'https://www.supremesvillagio.com/supreme-villagio/townhouses',
  'https://www.supremesvillagio.com/supreme-villagio-rera',
  'https://www.supremesvillagio.com/luxury-bungalows-pune',
  'https://www.supremesvillagio.com/villas-near-mumbai-pune-expressway',
  'https://www.supremesvillagio.com/villas-near-atal-setu-mthl',
  'https://www.supremesvillagio.com/somatane-villas',
  'https://www.supremesvillagio.com/somatane-real-estate',
  'https://www.supremesvillagio.com/luxury-villas-pune',
  'https://www.supremesvillagio.com/pcmc-luxury-villas',
  'https://www.supremesvillagio.com/4-bhk-villas-pune',
  'https://www.supremesvillagio.com/5-bhk-villas-pune',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/price-list-2026',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/for-pune-buyers',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/for-pimpri-chinchwad-pcmc-buyers',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/for-mumbai-buyers',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/weekend-second-homes-mumbai',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/ready-possession-oc-villas',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/ready-to-move-villas-zero-gst',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/floor-plans-pdf',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/rera-number-and-certificates',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/club-villagio-amenities',
  'https://www.supremesvillagio.com/supreme-villagio-somatane/contact-number-sales-office'
];

export async function POST(req: Request) {
  try {
    let urlsToSubmit = CANONICAL_URLS;
    try {
      const body = await req.json();
      if (body && Array.isArray(body.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // Default to CANONICAL_URLS if no json body
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urlsToSubmit,
    };

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      submittedCount: urlsToSubmit.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    protocol: 'IndexNow',
    host: HOST,
    keyConfigured: true,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlsRegistered: CANONICAL_URLS.length,
  });
}
