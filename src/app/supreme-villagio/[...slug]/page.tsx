import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function DynamicSeoPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];
  const fullSlug = slugArray.join('/').toLowerCase();

  // 301 Permanent Redirect all programmatic doorway patterns to dedicated authority hubs
  if (fullSlug.includes('price') || fullSlug.includes('cost') || fullSlug.includes('rate') || fullSlug.includes('crore')) {
    redirect('/supreme-villagio/price');
  } else if (fullSlug.includes('5-bhk')) {
    redirect('/supreme-villagio/5-bhk-villas');
  } else if (fullSlug.includes('4-bhk')) {
    redirect('/supreme-villagio/4-bhk-villas');
  } else if (fullSlug.includes('townhouse') || fullSlug.includes('row-house')) {
    redirect('/supreme-villagio/townhouses');
  } else if (fullSlug.includes('floor-plan') || fullSlug.includes('layout') || fullSlug.includes('blueprint')) {
    redirect('/supreme-villagio/floor-plans');
  } else if (fullSlug.includes('master-plan')) {
    redirect('/supreme-villagio/master-plan');
  } else if (fullSlug.includes('rera')) {
    redirect('/supreme-villagio-rera');
  } else if (fullSlug.includes('possession') || fullSlug.includes('construction') || fullSlug.includes('status')) {
    redirect('/supreme-villagio/possession');
  } else if (fullSlug.includes('talegaon')) {
    redirect('/talegaon-real-estate');
  } else if (fullSlug.includes('somatane')) {
    redirect('/somatane-real-estate');
  } else if (fullSlug.includes('hinjawadi') || fullSlug.includes('hinjewadi')) {
    redirect('/somatane-vs-hinjewadi');
  } else {
    redirect('/supreme-villagio/location');
  }
}
