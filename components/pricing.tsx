"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"
import AnimatedButton from "./animated-button"

const addOnServices = [
  {
    name: "Video Ad Production",
    description: "Professional video content for social media and advertising",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Website Development",
    description: "Custom website design and development optimized for conversions",
    icon: <Target className="w-5 h-5" />,
  },
  {
    name: "Marketing Automation",
    description: "Advanced email sequences and customer journey automation",
    icon: <TrendingUp className="w-5 h-5" />,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add-on Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Add-On Services</h3>
            <p className="text-xl text-gray-400">Enhance your marketing with specialized services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:bg-gray-900 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                  </div>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">What's included in ad spend?</h4>
              <p className="text-gray-400 mb-4">
                Ad spend is the budget allocated directly to advertising platforms (Google, Facebook, etc.). This is
                separate from our management fee and goes directly to your campaigns.
              </p>

              <h4 className="text-lg font-semibold text-white mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-400">
                Yes! You can upgrade or downgrade your plan with 30 days notice. We'll help you transition smoothly to
                ensure no disruption to your campaigns.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">How quickly will I see results?</h4>
              <p className="text-gray-400 mb-4">
                Most clients see initial improvements within 30-60 days, with significant results typically visible
                within 90 days. Timeline varies based on industry and current marketing maturity.
              </p>

              <h4 className="text-lg font-semibold text-white mb-2">Do you work with my existing tools?</h4>
              <p className="text-gray-400">
                We integrate with most popular marketing tools and platforms. If you have existing systems, we'll work
                to incorporate them into your strategy.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="https://cal.com/femurstudio/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              <AnimatedButton className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 text-lg">
                <span className="flex items-center">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </AnimatedButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
