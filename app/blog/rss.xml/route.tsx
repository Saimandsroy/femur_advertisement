import { NextResponse } from "next/server"
import { posts } from "@/data/posts"

// Required for static export - changed from edge runtime
export const dynamic = "force-static"

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  const feedItems = posts
    .map(
      (p) => `
  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${base}/blog/${p.slug}</link>
    <guid isPermaLink="true">${base}/blog/${p.slug}</guid>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <description><![CDATA[${p.excerpt}]]></description>
  </item>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Femur Marketing Blog</title>
  <link>${base}/blog</link>
  <description>Insights on paid social, SEO, and content strategy.</description>
  ${feedItems}
</channel>
</rss>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=86400",
    },
  })
}
