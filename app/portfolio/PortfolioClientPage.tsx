"use client"
import { useState, useMemo } from "react"
import { projects } from "@/data/portfolio"
import OptimizedImage from "@/components/optimized-image"

const categories = ["All", "Paid Social", "SEO", "Content", "CRO"] as const

export default function PortfolioClientPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All")
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Portfolio</h1>
          <p className="mt-2 text-white/70">Explore outcomes across our engagements.</p>
        </header>

        <div role="tablist" aria-label="Project categories" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`px-3 py-1.5 rounded-md text-sm border ${
                active === c ? "bg-white text-black border-white" : "border-white/20 text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <li key={p.slug} className="border border-white/10 rounded-lg overflow-hidden">
              {p.cover && (
                <OptimizedImage
                  src={p.cover || "/placeholder.svg"}
                  alt={`${p.name} cover`}
                  width={960}
                  height={480}
                  className="w-full h-40 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <p className="mt-1 text-sm text-white/70">{p.description}</p>
                {p.metrics && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span key={m.label} className="text-xs border border-white/20 rounded px-2 py-1 text-white/80">
                        {m.label}: {m.value}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
