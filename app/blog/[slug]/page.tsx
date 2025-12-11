import { notFound } from "next/navigation"
import { posts } from "@/data/posts"
import { JsonLd } from "@/components/seo"
import SitewideCTA from "@/components/sitewide-cta"
import OptimizedImage from "@/components/optimized-image"
import type { Metadata } from "next"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  const url = `${base}/blog/${post.slug}`
  return {
    title: `${post.title} | Femur Marketing`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      images: post.cover ? [{ url: post.cover, width: 1200, height: 600, alt: post.title }] : undefined,
    },
    alternates: { canonical: url },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    wordcount: post.minutes * 200,
    author: { "@type": "Organization", name: "Femur Marketing Agency" },
  }

  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <JsonLd data={jsonld} />
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">{post.title}</h1>
          <div className="mt-2 text-sm text-white/60">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            <span className="px-2">•</span>
            <span>{post.minutes} min read</span>
          </div>
          {post.cover && (
            <OptimizedImage
              src={post.cover || "/placeholder.svg"}
              alt=""
              width={1200}
              height={600}
              className="mt-6 w-full border border-white/10 object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          )}
        </header>
        <div className="prose prose-invert prose-sm md:prose-base max-w-none mt-6">
          <p>{post.excerpt}</p>
          <p>
            This article outlines the frameworks and steps to execute. Replace this placeholder with your detailed
            content, diagrams, and examples tailored to your clients.
          </p>
        </div>
      </article>
      <div className="mx-auto max-w-3xl px-4 pb-12">
        <SitewideCTA
          heading="Want help implementing this?"
          subheading="Book a free strategy session to get a custom plan."
          primaryHref="/quiz"
          primaryLabel="Get Your Plan"
          secondaryHref="/case-studies"
          secondaryLabel="See Results"
        />
      </div>
    </main>
  )
}
