export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  cover?: string
  minutes: number
}

export const posts: Post[] = [
  {
    slug: "tiktok-ads-2025-playbook",
    title: "The 2025 TikTok Ads Playbook for Lower CPAs",
    excerpt: "Creative frameworks, audience building, and offer angles driving efficient CPAs in 2025.",
    date: "2025-07-15",
    tags: ["paid-social", "tiktok", "creative"],
    cover: "/placeholder-a8wqk.png",
    minutes: 7,
  },
  {
    slug: "seo-content-hubs-that-rank",
    title: "SEO Content Hubs: Structure to Rank and Convert",
    excerpt: "How to structure topic clusters and internal links to lift rankings and conversions.",
    date: "2025-08-05",
    tags: ["seo", "content-strategy"],
    cover: "/placeholder-x9g95.png",
    minutes: 6,
  },
  {
    slug: "creative-analytics-loop",
    title: "Build a Creative-Analytics Feedback Loop",
    excerpt: "Turn creative insights into repeatable wins across channels with a tight test cadence.",
    date: "2025-08-20",
    tags: ["analytics", "creative", "experimentation"],
    cover: "/placeholder-k5eag.png",
    minutes: 8,
  },
]
