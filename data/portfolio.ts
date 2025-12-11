export type Project = {
  slug: string
  name: string
  category: "Paid Social" | "SEO" | "Content" | "CRO"
  description: string
  cover?: string
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: "nimbuscrm-creative-sprint",
    name: "NimbusCRM Creative Sprint",
    category: "Paid Social",
    description: "10-concept weekly cadence that unlocked 400% lead growth with stable CPAs.",
    cover: "/creative-grid.png",
    metrics: [{ label: "Leads", value: "+400%" }],
  },
  {
    slug: "glowup-ugc-scale",
    name: "GlowUp UGC Scale",
    category: "Content",
    description: "Creator-led UGC ads improved thumbstop rate and scaled ROAS to 3.1x.",
    cover: "/ugc-creative.png",
    metrics: [{ label: "ROAS", value: "3.1x" }],
  },
  {
    slug: "urban-dental-local-pack",
    name: "Urban Dental Local Pack",
    category: "SEO",
    description: "Local SEO + reviews drove consistent top-3 map positions within 6 weeks.",
    cover: "/local-seo.png",
    metrics: [{ label: "Top 3", value: "12 keywords" }],
  },
]
