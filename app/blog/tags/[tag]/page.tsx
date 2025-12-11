import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { posts } from "@/data/posts"

export function generateStaticParams() {
  const unique = Array.from(new Set(posts.flatMap((p) => p.tags)))
  return unique.map((t) => ({ tag: t }))
}

export function generateMetadata({ params }: { params: { tag: string } }): Metadata {
  const tag = decodeURIComponent(params.tag)
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  return {
    title: `Posts about ${tag} | Femur Marketing`,
    description: `Articles and playbooks on ${tag}.`,
    alternates: { canonical: `${base}/blog/tags/${encodeURIComponent(tag)}` },
  }
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag)
  const filtered = posts.filter((p) => p.tags.includes(tag))
  if (!filtered.length) return notFound()

  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Tag: {tag}</h1>
          <p className="mt-2 text-white/70">Articles focusing on {tag}.</p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <li key={post.slug} className="border border-white/10 rounded-lg overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="block">
                {post.cover && (
                  <img
                    src={post.cover || "/placeholder.svg"}
                    alt={`${post.title} cover`}
                    width={1200}
                    height={600}
                    loading="lazy"
                    className="w-full h-40 md:h-48 object-cover"
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
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link href="/blog" className="text-sm text-white/80 underline underline-offset-4">
            ← All posts
          </Link>
        </div>
      </section>
    </main>
  )
}
