"use client"
import { useMemo, useState } from "react"

type Answers = {
  goal: "Leads" | "Revenue" | "Awareness"
  budget: "Under 5k" | "5k-20k" | "20k+"
  timeline: "ASAP" | "1-3 months" | "3+ months"
}

const defaultA: Answers = { goal: "Leads", budget: "Under 5k", timeline: "1-3 months" }

export default function QuizClientPage() {
  const [a, setA] = useState<Answers>(defaultA)

  const recommendation = useMemo(() => {
    if (a.goal === "Leads" && a.budget !== "Under 5k") {
      return "Paid social + conversion landing pages with weekly creative sprints."
    }
    if (a.goal === "Revenue" && a.budget === "20k+") {
      return "Full-funnel: paid social, search, CRO experimentation, and lifecycle."
    }
    if (a.goal === "Awareness") {
      return "Always-on content engine (SEO + social) with selective paid amplification."
    }
    return "Start with SEO content hubs and light paid tests to validate offers."
  }, [a])

  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-2xl px-4 py-12">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Get Your Plan</h1>
          <p className="mt-2 text-white/70">Three quick questions. Instant recommendation.</p>
        </header>

        <form className="grid gap-6">
          <fieldset className="grid gap-3">
            <legend className="text-sm text-white/80">Primary goal</legend>
            <div className="flex gap-2">
              {(["Leads", "Revenue", "Awareness"] as Answers["goal"][]).map((v) => (
                <label key={v} className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2">
                  <input
                    type="radio"
                    name="goal"
                    checked={a.goal === v}
                    onChange={() => setA({ ...a, goal: v })}
                    className="accent-white"
                    aria-label={v}
                  />
                  <span className="text-sm">{v}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="grid gap-3">
            <legend className="text-sm text-white/80">Monthly budget</legend>
            <div className="flex gap-2">
              {(["Under 5k", "5k-20k", "20k+"] as Answers["budget"][]).map((v) => (
                <label key={v} className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2">
                  <input
                    type="radio"
                    name="budget"
                    checked={a.budget === v}
                    onChange={() => setA({ ...a, budget: v })}
                    className="accent-white"
                    aria-label={v}
                  />
                  <span className="text-sm">{v}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="grid gap-3">
            <legend className="text-sm text-white/80">Timeline</legend>
            <div className="flex gap-2">
              {(["ASAP", "1-3 months", "3+ months"] as Answers["timeline"][]).map((v) => (
                <label key={v} className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2">
                  <input
                    type="radio"
                    name="timeline"
                    checked={a.timeline === v}
                    onChange={() => setA({ ...a, timeline: v })}
                    className="accent-white"
                    aria-label={v}
                  />
                  <span className="text-sm">{v}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </form>

        <div className="mt-6 border border-white/20 rounded-lg p-4">
          <h2 className="text-lg font-medium">Recommendation</h2>
          <p className="mt-2 text-white/80">{recommendation}</p>
          <a
            href="/case-studies/saas-400-leads-lift"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium"
          >
            See a relevant case study
          </a>
        </div>
      </section>
    </main>
  )
}
