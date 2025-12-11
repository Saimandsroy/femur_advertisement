export type CaseStudy = {
  slug: string
  client: string
  title: string
  summary: string
  problem: string
  solution: string[]
  results: { label: string; value: string }[]
  hero?: string
  industry?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-400-leads-lift",
    client: "NimbusCRM",
    title: "400% Increase in Qualified Leads in 90 Days",
    summary: "Scaled paid social with creative sprints and conversion-focused landing pages.",
    problem: "Rising CPAs and flat demo bookings from meta and search despite increased spend.",
    solution: [
      "Creative testing cadence: 10 new concepts/week using product-led hooks",
      "Built landing page variants with clearer value props and social proof",
      "Audience restructuring: broad + stacked lookalikes, event-based exclusions",
      "Server-side tracking to recover signal loss",
    ],
    results: [
      { label: "Qualified leads", value: "+400%" },
      { label: "CPA", value: "-53%" },
      { label: "Demo-to-close", value: "+22%" },
    ],
    hero: "/dashboard-showing-lead-growth.png",
    industry: "B2B SaaS",
  },
  {
    slug: "d2c-roas-3x",
    client: "GlowUp Beauty",
    title: "3.1x ROAS with UGC Creatives",
    summary: "Refreshed creatives with UGC and creator collaborations, lifting ROAS while scaling.",
    problem: "Fatigued creatives causing ROAS decline and low thumbstop rate.",
    solution: [
      "UGC-style product demos focusing on outcomes",
      "Creator whitelisting to access warm audiences",
      "Offer testing: bundles, BOGO, limited editions",
    ],
    results: [
      { label: "ROAS", value: "3.1x" },
      { label: "Thumbstop rate", value: "+47%" },
    ],
    hero: "/ugc-ad-montage.png",
    industry: "DTC Beauty",
  },
  {
    slug: "local-seo-dominance",
    client: "Urban Dental",
    title: "#1 Local Pack in 6 Weeks",
    summary: "Local SEO overhaul and review generation program to dominate service-area queries.",
    problem: "Poor map pack visibility and inconsistent NAP citations.",
    solution: [
      "Google Business Profile optimization and services build-out",
      "Local content hubs with FAQ schema",
      "Review generation flows and SMS reminders",
    ],
    results: [
      { label: "Map pack rankings", value: "#1-3 for 12 keywords" },
      { label: "Calls from search", value: "+65%" },
    ],
    hero: "/map-pack-ranking-chart.png",
    industry: "Local Services",
  },
]
