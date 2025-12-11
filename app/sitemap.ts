import type { MetadataRoute } from "next"
import { posts } from "@/data/posts"
import { caseStudies } from "@/data/case-studies"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  const basePages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/portfolio`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/quiz`, changeFrequency: "monthly", priority: 0.6 },
  ]
  const blog = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))
  const cs = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))
  return [...basePages, ...blog, ...cs]
}
