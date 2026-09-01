export const SEO_KEYWORD_MATRIX = {
  // CLUSTER 9: Location Keywords (28 Locations)
  locations: [
    "pune", "somatane", "talegaon", "hinjawadi", "baner", "balewadi", "pashan", 
    "bavdhan", "wakad", "ravet", "punawale", "kiwale", "aundh", "prabhat-road", 
    "koregaon-park", "kalyani-nagar", "nibm", "panchshil", "pcmc", "mulshi", 
    "bhugaon", "sus", "mahalunge", "pirangut", "mumbai-pune-expressway", 
    "dehu-road", "chinchwad", "nigdi"
  ],
  
  // CLUSTERS 1-6: Luxury Property Types (70+ Types)
  categories: [
    // Configuration Specific (Highest Intent)
    "4-bhk-villas", "5-bhk-villas", "4-bhk-bungalows", "5-bhk-bungalows", 
    "4-bhk-row-houses", "5-bhk-twin-villas", "4-bhk-townhouses", "4-bhk-luxury-villas",
    "5-bhk-luxury-villas", "4-bhk-premium-homes", "5-bhk-premium-homes",
    // Bungalows & Twin Villas (Crucial Indian Market Terms)
    "bungalows", "twin-bungalows", "twin-villas", "luxury-bungalows", "premium-bungalows",
    "bungalows-for-sale", "independent-bungalows", "gated-bungalow-projects", "twin-bungalow-projects",
    "designer-bungalows", "modern-bungalows", "spacious-bungalows",
    // Villas
    "luxury-villas", "premium-villas", "villas-for-sale", "independent-villas", 
    "modern-villas", "designer-villas", "smart-villas", "luxury-gated-villas", 
    "ready-villas", "exclusive-villas", "villa-projects", "high-end-villas",
    // Homes
    "luxury-homes", "premium-luxury-homes", "ultra-luxury-homes", "exclusive-luxury-homes",
    "designer-luxury-homes", "gated-luxury-homes", "signature-homes", "mansion-style-homes",
    "elite-homes", "luxury-private-homes", "premium-homes", "premium-residential-projects",
    "premium-houses", "premium-living", "premium-family-homes",
    // Row Houses & Duplex
    "luxury-row-houses", "premium-row-houses", "row-house-projects", "gated-row-houses",
    "luxury-townhouses", "luxury-duplex", "duplex-homes", "duplex-villa", "premium-duplex-homes",
    // Broad Pune Real Estate Terms
    "pune-real-estate", "pune-property-investment", "luxury-real-estate-pune", 
    "best-real-estate-projects-pune", "top-real-estate-pune",
    // Supreme Universal Ecosystem (Brand Hijacking)
    "supreme-universal-projects", "supreme-estia", "supreme-estia-alternatives", 
    "supreme-amadore", "supreme-adima", "supreme-pallacio", "supreme-boulevard", 
    "supreme-universal-luxury", "supreme-universal-pune-projects", "best-supreme-projects",
    
    // Supreme Villagio Extreme Brand Hardening (Monopoly Strategy)
    "supreme-villagio", "supreme-villagio-somatane", "supreme-villagio-pune", 
    "supreme-villagio-villas", "supreme-villagio-price", "supreme-villagio-brochure",
    "supreme-villagio-floor-plans", "supreme-villagio-master-plan", "supreme-villagio-reviews",
    "supreme-villagio-possession-date", "supreme-villagio-rera", "supreme-villagio-sample-flat",
    "supreme-villagio-construction-status", "supreme-villagio-location-map",
    "supreme-villagio-4-bhk", "supreme-villagio-5-bhk", "supreme-universal-villagio",
    "villagio-somatane", "club-villagio", "club-villagio-somatane", "club-villagio-membership",
    "supreme-villagio-contact-number", "supreme-villagio-booking", "supreme-villagio-site-visit"
  ],

  // CLUSTERS 7, 8, 10, 11, 12, 14, 15: HNI & Budget Modifiers
  modifiers: [
    // Budgets (Cluster 7)
    "under-3-crore", "under-4-crore", "under-5-crore", "under-7-crore", "under-10-crore",
    "between-3-and-10-crore", "above-3-crore",
    // Lifestyles (Cluster 8)
    "luxury-living", "golf-living", "nature-living", "resort-living", "weekend-living",
    "pet-friendly", "smart-homes", "luxury-community", "wellness-living",
    // HNI Audiences (Cluster 10)
    "for-ceos", "for-entrepreneurs", "for-business-owners", "for-nris", "for-doctors",
    "luxury-second-homes", "executive-villas", "luxury-retirement-homes",
    // Amenities (Cluster 11)
    "with-private-garden", "with-private-terrace", "with-private-lift", "with-swimming-pool",
    "with-clubhouse", "forest-view", "mountain-view", "with-home-theatre",
    // Investment & Commercial (Clusters 12, 14)
    "investment", "high-roi", "price", "site-visit", "offers", "payment-plan"
  ]
};

// 28 Locations * 36 Categories * 38 Modifiers = 38,304 Combinations.

export function generateSeoSlugs(): string[][] {
  const slugs: string[][] = [];
  let count = 0;
  
  for (const location of SEO_KEYWORD_MATRIX.locations) {
    for (const category of SEO_KEYWORD_MATRIX.categories) {
      // 1. Parent Silo (1,008 combinations)
      if (count < 100) {
        slugs.push([location, category]);
        count++;
      }
      
      for (const modifier of SEO_KEYWORD_MATRIX.modifiers) {
        // 2. Child Silo (38,304 combinations)
        if (count < 100) {
          slugs.push([location, category, modifier]);
          count++;
        }
      }
    }
  }
  
  // Cap static generation at 100. ISR handles the remaining 38,204 On-Demand.
  return slugs.slice(0, 100);
}

// Function for the XML sitemap which needs ALL 38,304 combinations instantly
export function getAllSeoSlugStrings(): string[][] {
  const slugs: string[][] = [];
  
  for (const location of SEO_KEYWORD_MATRIX.locations) {
    for (const category of SEO_KEYWORD_MATRIX.categories) {
      slugs.push([location, category]);
      for (const modifier of SEO_KEYWORD_MATRIX.modifiers) {
        slugs.push([location, category, modifier]);
      }
    }
  }
  
  return slugs;
}

// Security Validation: Prevents "Soft 404" spam injection by explicitly validating the exact matrix permutation
export function isValidSeoSlug(slugs: string[]): boolean {
  if (!slugs || slugs.length < 2 || slugs.length > 3) return false;
  
  const isValidLocation = SEO_KEYWORD_MATRIX.locations.includes(slugs[0]);
  const isValidCategory = SEO_KEYWORD_MATRIX.categories.includes(slugs[1]);
  
  if (!isValidLocation || !isValidCategory) return false;
  
  if (slugs.length === 3) {
    const isValidModifier = SEO_KEYWORD_MATRIX.modifiers.includes(slugs[2]);
    if (!isValidModifier) return false;
  }
  
  return true;
}

// Parser that dynamically understands the HNI keywords
export function generateSeoDataFromSlug(slugs: string[]) {
  const rawLoc = slugs[0] || "pune";
  const rawCategory = slugs[1] || "luxury-villas";
  const rawModifier = slugs[2] || "";

  // Title case function
  const titleCase = (str: string) => str.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  
  const formattedLoc = titleCase(rawLoc);
  const formattedCat = titleCase(rawCategory);
  const formattedMod = rawModifier ? titleCase(rawModifier) : "";

  // Advanced grammatical formatting for the title
  let titleString = "";
  if (rawModifier.startsWith('under') || rawModifier.startsWith('between') || rawModifier.startsWith('above') || rawModifier.startsWith('for') || rawModifier.startsWith('with')) {
    titleString = `${formattedCat} in ${formattedLoc} ${formattedMod}`;
  } else if (rawModifier === "investment" || rawModifier === "high-roi") {
    titleString = `${formattedMod} ${formattedCat} in ${formattedLoc}`;
  } else if (rawModifier === "price" || rawModifier === "site-visit" || rawModifier === "offers" || rawModifier === "payment-plan") {
    titleString = `${formattedCat} in ${formattedLoc} | ${formattedMod}`;
  } else if (rawModifier.includes("living") || rawModifier.includes("community")) {
    titleString = `${formattedMod} | ${formattedCat} in ${formattedLoc}`;
  } else {
    titleString = `${formattedCat} in ${formattedLoc} ${formattedMod ? "- " + formattedMod : ""}`;
  }

  const finalTitle = `${titleString} | Supreme Villagio Somatane`;
  
  // Dynamic Pricing & Typology Hardening
  let typologyText = "4 & 5 BHK Luxury Twin Villas";
  let startingPrice = "₹2.89 Cr*";
  let carpetAreaText = "2,200 – 3,900 Sq. Ft.";

  if (rawCategory.includes("5-bhk")) {
    typologyText = "5 BHK Grand Presidential Villas";
    startingPrice = "₹4.85 Cr*";
    carpetAreaText = "3,400 – 3,900 Sq. Ft.";
  } else if (rawCategory.includes("4-bhk") && (rawCategory.includes("twin") || rawCategory.includes("villa") || rawCategory.includes("bungalow"))) {
    typologyText = "4 BHK Luxury Twin Villas";
    startingPrice = "₹3.45 Cr*";
    carpetAreaText = "2,600 – 2,900 Sq. Ft.";
  } else if (rawCategory.includes("townhouse") || rawCategory.includes("row-house")) {
    typologyText = "4 BHK Luxury Townhouses";
    startingPrice = "₹2.89 Cr*";
    carpetAreaText = "2,200 – 2,400 Sq. Ft.";
  }

  // Location Context Hardening (Prevents Doorway Penalty by explaining exact geographic relationship to Somatane)
  let locationContext = `in the serene 616-meter altitude microclimate of Somatane, Pune`;
  if (rawLoc === "hinjawadi" || rawLoc === "hinjewadi") {
    locationContext = `just 20 minutes from Hinjewadi IT Park via the Mumbai-Pune Expressway`;
  } else if (rawLoc === "baner" || rawLoc === "balewadi") {
    locationContext = `just 25 minutes from Baner & Balewadi High Street via the bypass highway`;
  } else if (rawLoc === "talegaon") {
    locationContext = `just 8 minutes from Talegaon MIDC along the expressway growth corridor`;
  } else if (rawLoc === "chakan") {
    locationContext = `within 25 minutes of the Chakan Auto & Manufacturing Corridor`;
  } else if (rawLoc === "mumbai-pune-expressway" || rawLoc === "lonavala") {
    locationContext = `directly situated 3 minutes from the Mumbai-Pune Expressway toll gate with Lonavala-grade hill breezes`;
  } else if (rawLoc === "kiwale" || rawLoc === "dehu-road" || rawLoc === "pcmc") {
    locationContext = `seamlessly connected to PCMC and Kiwale via the Old Highway and expressway bypass`;
  }

  const optimizedDescription = `Supreme Villagio offers ${typologyText.toLowerCase()} (${carpetAreaText}) ${locationContext}. Starting from ${startingPrice}. Verified MahaRERA (P52100046867 / P52100055048).`;

  const dynamicSeoParagraph = `Welcome to Supreme Villagio, Pune's flagship 16-acre low-density gated villa estate. If you are exploring the market for ${formattedCat.toLowerCase()} ${locationContext}, Supreme Villagio provides independent horizontal living, private wrap-around gardens, and the operational 18,500 sq.ft. Club Villagio. ${formattedMod ? `Tailored for buyers prioritizing ${formattedMod.toLowerCase()}, our ` : 'Our '}residences combine pure freehold proportionate land ownership with clean mountain air and rapid signal-free expressway connectivity. Explore ${typologyText} starting from ${startingPrice} today.`;

  return {
    heroHeadline1: formattedMod ? formattedMod : "A New Paradigm of",
    heroHeadline2: formattedCat,
    heroSubline: `Secure your legacy ${locationContext}. ${typologyText} starting from ${startingPrice}. Master-planned by Site Concepts International, Singapore.`,
    highlightWords: [formattedCat, formattedLoc, formattedMod].filter(Boolean).flatMap(s => s.split(" ")),
    pricing: startingPrice,
    typology: typologyText,
    title: finalTitle.replace(/\s+/g, ' ').trim(),
    description: optimizedDescription,
    dynamicSeoParagraph
  };
}

export function getRelatedSlugs(currentSlug: string[], count: number = 6): string[][] {
  const currentLocation = currentSlug[0];
  const currentCategory = currentSlug.length > 1 ? currentSlug[1] : null;
  
  const related: string[][] = [];
  let attempts = 0;
  
  while (related.length < count && attempts < 50) {
    attempts++;
    
    // Pick a random location, but bias towards same location 50% of the time
    const loc = Math.random() > 0.5 && currentLocation ? currentLocation : SEO_KEYWORD_MATRIX.locations[Math.floor(Math.random() * SEO_KEYWORD_MATRIX.locations.length)];
    
    // Pick a random category, but bias towards same category 50% of the time
    const cat = Math.random() > 0.5 && currentCategory ? currentCategory : SEO_KEYWORD_MATRIX.categories[Math.floor(Math.random() * SEO_KEYWORD_MATRIX.categories.length)];
    
    const modifier = SEO_KEYWORD_MATRIX.modifiers[Math.floor(Math.random() * SEO_KEYWORD_MATRIX.modifiers.length)];
    
    // Generate a valid length combination (2 to 3 segments)
    const length = Math.floor(Math.random() * 2) + 2;
    let slug: string[] = [];
    if (length === 2) slug = [loc, cat];
    else slug = [loc, cat, modifier];
    
    // Ensure we don't duplicate the current slug or existing related slugs
    const slugStr = slug.join('/');
    if (slugStr !== currentSlug.join('/') && !related.some(r => r.join('/') === slugStr)) {
      related.push(slug);
    }
  }
  
  return related;
}
