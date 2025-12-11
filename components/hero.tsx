"use client"

import { useState, useRef, useEffect } from "react"
import {
  Sparkles,
  X,
  ArrowRight,
  Search,
  Lightbulb,
  Rocket,
  BarChart3,
  Target,
  Globe,
  CheckCircle,
  TrendingUp,
  Eye,
  MessageSquare,
  Megaphone,
  Share2,
  PieChart,
} from "lucide-react"
import { EB_Garamond } from "next/font/google"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-eb-garamond",
})

const workflowSteps = [
  {
    number: "01",
    title: "Strategy & Analysis",
    description: "We dive deep into your brand, market, and competitors to craft a winning marketing strategy.",
    icon: <Search className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    timeline: "Week 1-2",
    deliverables: [
      "Comprehensive brand audit",
      "Competitor analysis & positioning",
      "Target audience research",
      "Marketing strategy roadmap",
    ],
    process: [
      { step: "Discovery call & goal alignment", icon: <MessageSquare className="w-4 h-4" /> },
      { step: "Market research & analysis", icon: <Eye className="w-4 h-4" /> },
      { step: "Strategy presentation & approval", icon: <CheckCircle className="w-4 h-4" /> },
    ],
  },
  {
    number: "02",
    title: "Creative & Content",
    description: "Our creative team develops compelling campaigns and content that converts your audience.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    timeline: "Week 3-4",
    deliverables: [
      "Ad creative & campaign assets",
      "Social media content calendar",
      "Brand messaging & copywriting",
      "Video & graphic design",
    ],
    process: [
      { step: "Creative brief & concept development", icon: <Lightbulb className="w-4 h-4" /> },
      { step: "Content production & design", icon: <Sparkles className="w-4 h-4" /> },
      { step: "Review, feedback & finalization", icon: <CheckCircle className="w-4 h-4" /> },
    ],
  },
  {
    number: "03",
    title: "Launch & Scale",
    description: "We execute campaigns across all channels and continuously optimize for maximum ROI.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    timeline: "Week 5+",
    deliverables: [
      "Multi-channel campaign launch",
      "Real-time performance monitoring",
      "Monthly analytics reports",
      "Ongoing optimization & scaling",
    ],
    process: [
      { step: "Campaign deployment & monitoring", icon: <Rocket className="w-4 h-4" /> },
      { step: "Performance analysis & reporting", icon: <BarChart3 className="w-4 h-4" /> },
      { step: "Continuous optimization & growth", icon: <TrendingUp className="w-4 h-4" /> },
    ],
  },
]

const achievements = [
  { number: "300+", label: "Campaigns Launched", icon: <Megaphone className="w-6 h-6" /> },
  { number: "95%", label: "Client Retention", icon: <Target className="w-6 h-6" /> },
  { number: "5M+", label: "Ad Impressions", icon: <Eye className="w-6 h-6" /> },
  { number: "40+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
]

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentWord, setCurrentWord] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showWorkflowModal, setShowWorkflowModal] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMobile()

  // Faster typing speeds
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseBeforeDelete = 1000
  const pauseBeforeNextWord = 300

  const words = ["Businesses", "Startups", "Brands", "Companies"]
  const wordIndex = useRef(0)

  // Auto-play video on mobile
  useEffect(() => {
    if (videoRef.current && isMobile) {
      const video = videoRef.current

      // Multiple attempts to play video
      const playVideo = async () => {
        try {
          video.muted = true
          video.playsInline = true
          await video.play()
        } catch (error) {
          console.log("Video autoplay failed:", error)
          // Try again after a short delay
          setTimeout(() => {
            video.play().catch(() => { })
          }, 1000)
        }
      }

      // Try to play immediately
      playVideo()

      // Also try when video loads
      video.addEventListener("loadeddata", playVideo)
      video.addEventListener("canplay", playVideo)

      // Try on any user interaction
      const handleInteraction = () => {
        playVideo()
        document.removeEventListener("touchstart", handleInteraction)
        document.removeEventListener("click", handleInteraction)
      }

      document.addEventListener("touchstart", handleInteraction, { passive: true })
      document.addEventListener("click", handleInteraction)

      return () => {
        video.removeEventListener("loadeddata", playVideo)
        video.removeEventListener("canplay", playVideo)
        document.removeEventListener("touchstart", handleInteraction)
        document.removeEventListener("click", handleInteraction)
      }
    }
  }, [isMobile])

  // Typing animation
  useEffect(() => {
    if (!currentWord) {
      setCurrentWord(words[0])
    }

    let timeout: NodeJS.Timeout

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        wordIndex.current = (wordIndex.current + 1) % words.length
        setCurrentWord(words[wordIndex.current])
        timeout = setTimeout(() => { }, pauseBeforeNextWord)
      }
    } else {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseBeforeDelete)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWord])

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

        {/* Video Background - Both Desktop and Mobile */}
        <div className="absolute inset-0 z-0">
          {isMobile ? (
            // Mobile HTML5 Video with your provided file
            <video
              ref={videoRef}
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              style={{ pointerEvents: "none" }}
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveClip.App_AQMZLLN4piPjyKmLTPAWs37jl45_btS9d4Q8OS_zZwaG-RpnTIhDmC2KQe11gNRNqj3co3YfN3WkB7tKhj98GjgPJaO8cmmAYcc4MGs-kefMRhsbtxIojXkEH2q4i1oe24vuH5.mp4" type="video/mp4" />
            </video>
          ) : (
            // Desktop YouTube Embed
            <iframe
              src="https://www.youtube.com/embed/YMXWiURJumo?autoplay=1&mute=1&loop=1&playlist=YMXWiURJumo&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1"
              className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
              style={{
                minWidth: "100vw",
                minHeight: "100vh",
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
              title="Hero Background Video"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
            <div className="space-y-8">
              <div className="space-y-6">
                <button
                  onClick={() => setShowWorkflowModal(true)}
                  className="group inline-flex items-center px-6 py-3 bg-black/40 border border-white/30 rounded-full hover:bg-black/50 hover:border-white/40 transition-all duration-200 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center w-5 h-5 bg-white/20 rounded-full mr-3">
                    <Sparkles className="h-2.5 w-2.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Your Growth Partner in Digital Marketing</span>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                </button>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  <span className="block text-white mb-2">AMPLIFY YOUR BRAND</span>
                  <span className="block text-white mb-2">MARKETING AGENCY FOR</span>
                  <div className="relative mb-2">
                    <span
                      className={cn(
                        "block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent bg-clip-text",
                        ebGaramond.variable,
                      )}
                      style={{
                        fontFamily: "var(--font-eb-garamond)",
                        fontStyle: "italic",
                        fontWeight: 700,
                        backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: isMobile ? "none" : "0 0 60px rgba(147, 51, 234, 0.6)",
                        lineHeight: "0.9",
                      }}
                    >
                      {displayText}
                      <span
                        className="inline-block ml-1 w-1.5 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 opacity-100"
                        style={{
                          background: "linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)",
                          animation: "smoothBlink 1.2s infinite",
                        }}
                      ></span>
                    </span>
                  </div>
                  <span className="block text-gray-300">READY TO SCALE</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  We handle all your advertising needs and social media management so you can focus on what you do best.
                  From strategy to execution, we drive results that matter to your bottom line.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-8">
                {[
                  { icon: Megaphone, label: "Ad Campaigns", desc: "Multi-Platform Advertising" },
                  { icon: Share2, label: "Social Media", desc: "Complete Management" },
                  { icon: PieChart, label: "Analytics", desc: "Performance Tracking" },
                ].map((service, index) => (
                  <div key={service.label} className="flex flex-col items-center space-y-2 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 border border-white/30 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-200">
                      <service.icon className="w-5 h-5 text-white/90" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xs font-medium text-white/90">{service.label}</h3>
                      <p className="text-xs text-gray-400">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Modal */}
      {showWorkflowModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/90"
          onClick={() => setShowWorkflowModal(false)}
        >
          <div
            className="relative w-full bg-black border-t border-gray-700 rounded-t-3xl max-h-[90vh] overflow-y-auto"
            style={{ animation: "slideUp 0.2s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWorkflowModal(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>

            <div className="p-8 pb-12 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">How Femur Drives Results</h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  From strategy to scaling, here's our proven process for transforming your marketing performance
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg mb-3 mx-auto">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-400">{achievement.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-8 mb-12">
                {workflowSteps.map((step, index) => (
                  <div key={step.number} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="text-3xl font-bold text-gray-600">{step.number}</div>
                          <div
                            className={`p-3 bg-gradient-to-br ${step.color}/20 rounded-xl text-white border border-gray-700`}
                          >
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 mb-4">{step.description}</p>
                        <div className="inline-flex items-center px-3 py-1 bg-gray-800 rounded-full">
                          <span className="text-xs text-gray-300">{step.timeline}</span>
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Process</h4>
                        <div className="space-y-3">
                          {step.process.map((process, processIndex) => (
                            <div key={processIndex} className="flex items-center space-x-3">
                              <div
                                className={`w-8 h-8 bg-gradient-to-br ${step.color}/20 rounded-lg flex items-center justify-center`}
                              >
                                {process.icon}
                              </div>
                              <span className="text-sm text-gray-300">{process.step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Deliverables</h4>
                        <div className="space-y-3">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}></div>
                              <span className="text-sm text-gray-300">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Marketing?</h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Let's discuss your marketing goals and create a custom strategy that delivers measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://cal.com/femurstudio/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowWorkflowModal(false)}
                    className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors inline-block text-center"
                  >
                    Start Your Campaign
                  </a>
                  <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-colors border border-gray-700">
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes smoothBlink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
