export const dynamic = "force-static";
import { generateSiloSitemap } from "@/lib/sitemap-generator";

export async function GET() {
  return generateSiloSitemap(6);
}
