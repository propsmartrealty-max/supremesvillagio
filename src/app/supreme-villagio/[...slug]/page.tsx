import { permanentRedirect } from 'next/navigation';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default async function DynamicSeoPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];
  const fullSlug = slugArray.join('/').toLowerCase();

  // 301 Permanent Redirect all programmatic permutations to dedicated canonical authority hubs
  if (fullSlug.includes('ecosystem')) {
    permanentRedirect('/ecosystem');
  } else if (fullSlug.includes('somante')) {
    // Gracefully resolve common typo "somante" -> somatane / ecosystem
    if (fullSlug.includes('villa') || fullSlug.includes('real-estate') || fullSlug.includes('property')) {
      permanentRedirect('/somatane-real-estate');
    } else {
      permanentRedirect('/ecosystem');
    }
  } else if (fullSlug.includes('amenit') || fullSlug.includes('clubhouse') || fullSlug.includes('club-villagio') || fullSlug.includes('pool') || fullSlug.includes('gym')) {
    permanentRedirect('/supreme-villagio/amenities');
  } else if (fullSlug.includes('brochure') || fullSlug.includes('pdf') || fullSlug.includes('download')) {
    permanentRedirect('/supreme-villagio/brochure');
  } else if (fullSlug.includes('faq') || fullSlug.includes('question') || fullSlug.includes('inquiry')) {
    permanentRedirect('/supreme-villagio/faq');
  } else if (fullSlug.includes('review') || fullSlug.includes('feedback') || fullSlug.includes('rating') || fullSlug.includes('testimonial')) {
    permanentRedirect('/supreme-villagio/reviews');
  } else if (fullSlug.includes('emi') || fullSlug.includes('loan') || fullSlug.includes('calculator') || fullSlug.includes('finance')) {
    permanentRedirect('/supreme-villagio/emi-calculator');
  } else if (fullSlug.includes('architecture') || fullSlug.includes('design') || fullSlug.includes('architect')) {
    permanentRedirect('/supreme-villagio/architecture');
  } else if (fullSlug.includes('vision') || fullSlug.includes('developer') || fullSlug.includes('universal')) {
    permanentRedirect('/supreme-villagio/vision');
  } else if (fullSlug.includes('phase-1') || fullSlug.includes('phase-i') || fullSlug.includes('phase1')) {
    permanentRedirect('/supreme-villagio/phase-1');
  } else if (fullSlug.includes('phase-2') || fullSlug.includes('phase-ii') || fullSlug.includes('phase2')) {
    permanentRedirect('/supreme-villagio/phase-2');
  } else if (fullSlug.includes('phase-3') || fullSlug.includes('phase-iii') || fullSlug.includes('phase3')) {
    permanentRedirect('/supreme-villagio/phase-3');
  } else if (fullSlug.includes('nri') || fullSlug.includes('overseas') || fullSlug.includes('expat')) {
    permanentRedirect('/supreme-villagio/nri-guide');
  } else if (fullSlug.includes('investment') || fullSlug.includes('roi') || fullSlug.includes('appreciation')) {
    permanentRedirect('/supreme-villagio/investment');
  } else if (fullSlug.includes('residence') || fullSlug.includes('bungalow') || fullSlug.includes('villa')) {
    permanentRedirect('/supreme-villagio/residences');
  } else if (fullSlug.includes('price') || fullSlug.includes('cost') || fullSlug.includes('rate') || fullSlug.includes('crore')) {
    permanentRedirect('/supreme-villagio/price');
  } else if (fullSlug.includes('5-bhk')) {
    permanentRedirect('/supreme-villagio/5-bhk-villas');
  } else if (fullSlug.includes('4-bhk')) {
    permanentRedirect('/supreme-villagio/4-bhk-villas');
  } else if (fullSlug.includes('townhouse') || fullSlug.includes('row-house')) {
    permanentRedirect('/supreme-villagio/townhouses');
  } else if (fullSlug.includes('floor-plan') || fullSlug.includes('layout') || fullSlug.includes('blueprint')) {
    permanentRedirect('/supreme-villagio/floor-plans');
  } else if (fullSlug.includes('master-plan')) {
    permanentRedirect('/supreme-villagio/master-plan');
  } else if (fullSlug.includes('rera') || fullSlug.includes('maharera')) {
    permanentRedirect('/supreme-villagio-rera');
  } else if (fullSlug.includes('possession') || fullSlug.includes('construction') || fullSlug.includes('status')) {
    permanentRedirect('/supreme-villagio/possession');
  } else if (fullSlug.includes('talegaon')) {
    permanentRedirect('/talegaon-real-estate');
  } else if (fullSlug.includes('somatane')) {
    permanentRedirect('/somatane-real-estate');
  } else if (fullSlug.includes('hinjawadi') || fullSlug.includes('hinjewadi')) {
    permanentRedirect('/somatane-vs-hinjewadi');
  } else {
    permanentRedirect('/supreme-villagio/location');
  }
}
