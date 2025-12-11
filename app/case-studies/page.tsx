import Link from "next/link"
import { caseStudies } from "@/data/case-studies"
import SitewideCTA from "@/components/sitewide-cta"
import OptimizedImage from "@/components/optimized-image"

export const metadata = {
  title: "Case Studies | Femur Marketing",
  description: "Proven results across SaaS, DTC, and local services.",
}

export default function CaseStudiesIndex() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Client Results</h1>
          <p className="mt-2 text-white/70">Real outcomes from growth engagements.</p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((c) => (
            <li key={c.slug} className="border border-white/10 rounded-lg overflow-hidden">
              <Link href={`/case-studies/${c.slug}`} className="block">
                {c.hero && (
                  <OptimizedImage
                    src={c.hero || "/placeholder.svg"}
                    alt={`${c.client} case study`}
                    width={1280}
                    height={640}
                    className="w-full h-40 md:h-48 object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                <div className="p-4">
                  <span className="text-xs text-white/60">{c.industry}</span>
                  <h2 className="mt-1 text-xl font-medium">{c.title}</h2>
                  <p className="mt-1 text-sm text-white/70">{c.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.results.slice(0, 2).map((r) => (
                      <span key={r.label} className="text-xs border border-white/20 rounded px-2 py-1 text-white/80">
                        {r.label}: {r.value}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <SitewideCTA
          heading="Ready to become our next case study?"
          subheading="We’ll map the path from today’s baseline to measurable wins."
          primaryHref="/quiz"
          primaryLabel="Get Your Plan"
          secondaryHref="/blog"
          secondaryLabel="Read Insights"
        />
      </section>
    </main>
  )
}
