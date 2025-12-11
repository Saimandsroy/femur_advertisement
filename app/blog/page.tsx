import Link from "next/link"
import { posts } from "@/data/posts"
import { JsonLd } from "@/components/seo"
import SitewideCTA from "@/components/sitewide-cta"
import OptimizedImage from "@/components/optimized-image"

export const metadata = {
  title: "Blog | Femur Marketing",
  description: "Insights on paid social, SEO, and content strategy to help you grow faster.",
}

export default function BlogIndex() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/blog/${p.slug}`,
      name: p.title,
    })),
  }
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <JsonLd data={itemList} />
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Marketing Insights & Playbooks</h1>
          <p className="mt-2 text-white/70">Actionable strategies across paid social, SEO, and content.</p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <li key={post.slug} className="border border-white/10 rounded-lg overflow-hidden">
              <Link
                href={`/blog/${post.slug}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {post.cover && (
                  <OptimizedImage
                    src={post.cover || "/placeholder.svg"}
                    alt={`${post.title} cover`}
                    width={1200}
                    height={600}
                    className="w-full h-40 md:h-48 object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-medium">{post.title}</h2>
                  <p className="mt-1 text-sm text-white/70">{post.excerpt}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-white/60">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                    <span>•</span>
                    <span>{post.minutes} min read</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <Link
                        key={t}
                        href={`/blog/tags/${encodeURIComponent(t)}`}
                        className="text-xs border border-white/20 rounded px-2 py-1 text-white/80 hover:bg-white/10"
                      >
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <SitewideCTA
            heading="Want strategies like these in your inbox?"
            subheading="Subscribe for weekly growth plays across SEO, paid, and CRO."
            primaryHref="/quiz"
            primaryLabel="Get Your Plan"
            secondaryHref="/case-studies"
            secondaryLabel="See Results"
          />
        </div>
      </section>
    </main>
  )
}
