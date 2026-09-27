// Hugo Alcini Portfolio - Data for Interactive Simulators, Client Showcase & Case Studies

const portfolioData = {
  // Preset targets for the Technical SEO Inspector Simulator
  seoPresets: {
    "api-docs": {
      url: "https://docs.cloudcore.io/v2/reference",
      statusCode: "200 OK (Served via Cloudflare Edge / HTTP/3)",
      canonical: "https://docs.cloudcore.io/v2/reference",
      canonicalStatus: "Self-Referencing Canonical (Valid)",
      robotsDirectives: "index, follow, max-snippet:-1, max-image-preview:large",
      ttfb: "48 ms",
      lcp: "0.74 s",
      inp: "28 ms",
      cls: "0.000",
      cwvScore: "99/100",
      hydrationDrift: "0 ms (Static Site Generated - Astro/SSG)",
      schemaType: "TechArticle & SoftwareSourceCode",
      schemaGraph: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": "https://docs.cloudcore.io/v2/reference#article",
      "headline": "CloudCore Distributed Storage API Reference",
      "inLanguage": "en-US",
      "author": {
        "@type": "Person",
        "name": "Hugo Alcini"
      },
      "proficiencyLevel": "Expert",
      "dependencies": "OpenAPI 3.1.0, REST v2"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://docs.cloudcore.io/#software",
      "name": "CloudCore Engine",
      "operatingSystem": "All",
      "applicationCategory": "DeveloperApplication"
    }
  ]
}`,
      recommendations: [
        "Optimal Crawl Path: Zero orphan sub-routes detected.",
        "Schema Integrity: 100% compliant with Google Structured Data standards.",
        "Cache-Control: s-maxage=31536000, stale-while-revalidate=86400."
      ]
    },
    "saas-app": {
      url: "https://app.metricsflow.dev/dashboard/overview",
      statusCode: "200 OK (Next.js 14 Standalone Server / Edge SSR)",
      canonical: "https://app.metricsflow.dev/dashboard/overview",
      canonicalStatus: "Uniform Canonical Enforced",
      robotsDirectives: "noindex, nofollow (Authenticated Workspace Guard)",
      ttfb: "65 ms",
      lcp: "0.92 s",
      inp: "45 ms",
      cls: "0.002",
      cwvScore: "96/100",
      hydrationDrift: "12 ms (React Server Components Optimized)",
      schemaType: "WebApplication",
      schemaGraph: `{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "MetricsFlow Telemetry",
  "applicationSuite": "Enterprise Cloud Suite",
  "browserRequirements": "Requires JavaScript ES6+",
  "featureList": "Real-time query profiling, anomaly detection"
}`,
      recommendations: [
        "Authenticated Route: Properly protected with 'noindex, nofollow' header.",
        "Resource Preloading: Critical JS bundles loaded with <link rel='modulepreload'>."
      ]
    },
    "ecommerce-store": {
      url: "https://store.hypergear.com/products/pro-blade-server",
      statusCode: "200 OK (Multi-region CDN / Brotli Compression)",
      canonical: "https://store.hypergear.com/products/pro-blade-server",
      canonicalStatus: "Self-Referential with Hreflang Cluster",
      robotsDirectives: "index, follow",
      ttfb: "52 ms",
      lcp: "0.86 s",
      inp: "35 ms",
      cls: "0.001",
      cwvScore: "98/100",
      hydrationDrift: "0 ms (Partial Hydration Islands)",
      schemaType: "Product & AggregateOffer",
      schemaGraph: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "HyperBlade PCIe Gen5 Server Node",
  "image": "https://store.hypergear.com/assets/pro-blade.png",
  "sku": "HB-GEN5-4U",
  "brand": {
    "@type": "Brand",
    "name": "HyperGear Systems"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "4299.00",
    "highPrice": "8999.00",
    "availability": "https://schema.org/InStock"
  }
}`,
      recommendations: [
        "Hreflang Configuration: Bi-directional link mapping verified for 8 international locales.",
        "Image Optimization: Next-gen AVIF delivery with responsive srcset attributes."
      ]
    }
  },

  // Client Showcase Data: Livsstöd & Ceremonier built for Emil
  clientShowcase: {
    clientName: "Emil",
    clientRole: "Founder",
    projectName: "Livsstöd & Ceremonier",
    projectUrl: "https://halcini.github.io/counseling/",
    rating: 5,
    reviewDate: "Verified Client Review",
    reviewText: "Hugo completely transformed our digital presence. He designed and configured the 'Livsstöd & Ceremonier' platform from scratch—balancing a calm, trustworthy aesthetic with an intuitive triage booking flow. The client feedback has been extraordinary, and the website loads with lightning speed. Truly world-class craftsmanship and deep attention to detail!",
    keyMetrics: [
      { label: "Lighthouse Performance", value: "100/100" },
      { label: "Accessibility", value: "97/100" },
      { label: "SEO", value: "100/100" },
      { label: "Client Satisfaction", value: "100/100" }
    ],
    techHighlights: [
      "Custom UI/UX Theme (Nordic Sage & Warm Gold)",
      "Interactive 3-Pillar Needs Assessment Triage",
      "Dynamic Light / Dark Theme Switcher",
      "Streamlined Multi-Step Booking & Consultation Engine",
      "Zero-Dependency Vanilla Architecture with 100% CWV Score"
    ]
  },

  // Case Studies Data for Interactive Filtering
  caseStudies: [
    {
      category: "design",
      categoryName: "Website Design & Configuration",
      title: "Livsstöd & Ceremonier — Counseling & Ceremony Platform",
      client: "Emil",
      desc: "Designed and configured an empathetic, high-converting digital portal for family counseling and authorized civil ceremonies. Integrated an interactive client triage system and dynamic booking engine.",
      impact: "+68% Consultation Bookings • 99/100 Core Web Vitals",
      tags: ["Custom UI/UX", "Interactive Triage", "Theme Engine", "WCAG 2.1 AA", "Client: Emil"],
      url: "https://halcini.github.io/counseling/"
    },
    {
      category: "seo",
      categoryName: "Technical SEO Overhaul",
      title: "-",
      client: "-",
      desc: "-",
      impact: "-",
      tags: ["Next.js SSR", "Edge Cache", "Crawl Budget", "JSON-LD"]
    },
    {
      category: "design",
      categoryName: "Website Design & Builder Configuration",
      title: "-",
      client: "-",
      desc: "-",
      impact: "-",
      tags: ["Design Systems", "Modular CMS", "Checkout UX", "Micro-Animations"]
    },
    {
      category: "seo",
      categoryName: "Technical SEO Architecture",
      title: "-",
      client: "-",
      desc: "-",
      impact: "-",
      tags: ["-"]
    },
    {
      category: "fullstack",
      categoryName: "SEO & Design Synergy",
      title: "-",
      client: "-",
      desc: "-",
      impact: "-",
      tags: ["Design System", "Schema.org", "SSG / Jamstack", "Conversion Funnel"]
    },
    {
      category: "design",
      categoryName: "Website Design & UI/UX",
      title: "-",
      client: "-",
      desc: "-",
      impact: "-",
      tags: ["Financial UI", "Interactive Sliders", "Data Visuals", "Frictionless Forms"]
    }
  ]
};

// Expose globally for browsers and module systems
if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}

