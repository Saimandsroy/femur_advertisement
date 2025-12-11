import { notFound } from "next/navigation"
import { caseStudies } from "@/data/case-studies"
import { JsonLd } from "@/components/seo"
import SitewideCTA from "@/components/sitewide-cta"
import OptimizedImage from "@/components/optimized-image"

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) return notFound()

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: cs.title,
    about: cs.industry,
    headline: cs.title,
  }

  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <JsonLd data={jsonld} />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <p className="text-white/60 text-sm">{cs.industry}</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">{cs.title}</h1>
          <p className="mt-2 text-white/70">{cs.summary}</p>
          {cs.hero && (
            <OptimizedImage
              src={cs.hero || "/placeholder.svg"}
              alt=""
              width={1280}
              height={640}
              className="mt-6 w-full border border-white/10 object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          )}
        </header>

        <div className="mt-8 grid gap-8">
          <div>
            <h2 className="text-xl font-medium">The Problem</h2>
            <p className="mt-2 text-white/70">{cs.problem}</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Our Approach</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-white/80">
              {cs.solution.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">The Results</h2>
            <ul className="mt-2 grid grid-cols-2 gap-3">
              {cs.results.map((r) => (
                <li key={r.label} className="border border-white/20 rounded-md px-3 py-2">
                  <p className="text-xs text-white/60">{r.label}</p>
                  <p className="text-lg">{r.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-12">
        <SitewideCTA
          heading="Want results like these?"
          subheading="Let’s discuss a tailored engagement for your goals and constraints."
          primaryHref="/quiz"
          primaryLabel="Get Your Plan"
          secondaryHref="/portfolio"
          secondaryLabel="See Portfolio"
        />
      </section>
    </main>
  )
}
