"use client"
import Link from "next/link"

export default function SitewideCTA({
  heading = "Ready to grow faster?",
  subheading = "Get a free strategy session tailored to your goals.",
  primaryHref = "/quiz",
  primaryLabel = "Get Your Plan",
  secondaryHref = "/case-studies",
  secondaryLabel = "See Results",
}: {
  heading?: string
  subheading?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    null
    // <section
    //   aria-labelledby="sitewide-cta-title"
    //   className="w-full bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 my-12"
    // >
    //   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    //     <div className="max-w-xl">
    //       <h2 id="sitewide-cta-title" className="text-pretty text-2xl md:text-3xl font-semibold text-white">
    //         {heading}
    //       </h2>
    //       <p className="mt-2 text-sm md:text-base text-white/70">{subheading}</p>
    //     </div>
    //     <div className="flex items-center gap-3">
    //       <Link
    //         href={primaryHref}
    //         className="inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40"
    //       >
    //         {primaryLabel}
    //       </Link>
    //       <Link
    //         href={secondaryHref}
    //         className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40"
    //       >
    //         {secondaryLabel}
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  )
}
