"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Instagram, Youtube, Megaphone, Share2, Target, TrendingUp, Users } from "lucide-react"

const services = [
  {
    title: "Social Media Management",
    description:
      "Complete social media management including content creation, posting, community engagement, and growth strategies across all platforms.",
    mockup: "social-media",
    anchor: "social-media",
  },
  {
    title: "Paid Advertising",
    description:
      "Strategic paid advertising campaigns across Google, Facebook, Instagram, and other platforms to maximize your ROI and reach.",
    mockup: "paid-ads",
    anchor: "paid-advertising",
  },
  {
    title: "Content Marketing",
    description:
      "Engaging content creation including blog posts, videos, graphics, and copywriting that converts your audience into customers.",
    mockup: "content",
    anchor: "content-marketing",
  },
  {
    title: "Brand Strategy",
    description:
      "Comprehensive brand positioning, messaging, and visual identity development to make your business stand out in the market.",
    mockup: "branding",
    anchor: "brand-strategy",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Detailed performance tracking and reporting with actionable insights to optimize your marketing campaigns and ROI.",
    mockup: "analytics",
    anchor: "analytics-reporting",
  },
  {
    title: "Marketing Automation",
    description:
      "Streamlined marketing workflows, email sequences, and customer journey automation to nurture leads and drive conversions.",
    mockup: "automation",
    anchor: "marketing-automation",
    badges: [
      { icon: <Target className="w-4 h-4" />, text: "Lead Nurturing" },
      { icon: <TrendingUp className="w-4 h-4" />, text: "Conversion Focused" },
      { icon: <Users className="w-4 h-4" />, text: "Customer Journey" },
    ],
  },
]

export default function InnovativeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Marketing services that deliver results
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to grow your business and amplify your brand presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Top row - Social Media and Paid Advertising */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="aspect-[4/3] bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                    {/* Social Media Management Mockup */}
                    {service.mockup === "social-media" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-4 h-full flex flex-col">
                          <div className="flex justify-between items-center mb-4">
                            <div className="text-xs text-gray-400">Social Platforms</div>
                            <div className="flex space-x-2">
                              {[
                                {
                                  delay: 0.2,
                                  bg: "bg-gradient-to-br from-purple-500 to-pink-500",
                                  icon: <Instagram className="w-3 h-3 text-white" />,
                                },
                                { delay: 0.4, bg: "bg-red-600", icon: <Youtube className="w-3 h-3 text-white" /> },
                                { delay: 0.6, bg: "bg-blue-600", icon: "f", textColor: "text-white text-xs font-bold" },
                              ].map((platform, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0, opacity: 0 }}
                                  whileInView={{ scale: 1, opacity: 1 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: platform.delay,
                                  }}
                                  viewport={{ once: true }}
                                  className={`w-5 h-5 ${platform.bg} rounded-md flex items-center justify-center ${platform.textColor || ""}`}
                                >
                                  {platform.icon}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2 mb-4 flex-1">
                            {[
                              { name: "Content Created", color: "bg-blue-600", width: "95%" },
                              { name: "Posts Scheduled", color: "bg-green-600", width: "88%" },
                              { name: "Engagement Rate", color: "bg-purple-600", width: "92%" },
                              { name: "Follower Growth", color: "bg-pink-600", width: "78%" },
                            ].map((metric, i) => (
                              <motion.div
                                key={i}
                                className={`text-white text-xs px-2 py-1 rounded ${metric.color}`}
                                initial={{ width: "0%" }}
                                whileInView={{ width: metric.width }}
                                transition={{
                                  duration: 1.2,
                                  delay: 0.8 + i * 0.2,
                                  ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                              >
                                {metric.name}
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex justify-between items-end mt-auto pt-2">
                            <div>
                              <div className="text-xs text-gray-400 mb-1">Monthly Growth</div>
                              <motion.div
                                animate={{
                                  scale: [1, 1.1, 1],
                                  color: ["#10b981", "#34d399", "#10b981"],
                                }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                className="text-lg font-bold text-green-400"
                              >
                                +35%
                              </motion.div>
                            </div>
                            <div className="flex items-end space-x-1 h-12">
                              {[4, 6, 3, 8, 5, 7].map((height, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ height: "4px" }}
                                  whileInView={{ height: `${height * 5}px` }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                    delay: 1.6 + i * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                  className="bg-blue-500 w-1 rounded-t"
                                ></motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Paid Advertising Mockup */}
                    {service.mockup === "paid-ads" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-4 h-full flex flex-col">
                          <div className="flex items-center space-x-2 mb-6">
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
                            >
                              <Megaphone className="w-4 h-4 text-white" />
                            </motion.div>
                            <div>
                              <div className="text-xs text-white">Ad Campaigns</div>
                              <div className="text-xs text-gray-400">Multi-Platform Performance</div>
                            </div>
                          </div>
                          <div className="space-y-3 flex-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Ad Spend</span>
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="text-blue-400 font-semibold"
                              >
                                $2,450
                              </motion.span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Conversions</span>
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                                className="text-green-400 font-semibold"
                              >
                                127
                              </motion.span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">ROAS</span>
                              <span className="text-purple-400 font-semibold">4.2x</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Cost per Lead</span>
                              <span className="text-green-400 font-semibold">$19.30</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-between h-auto">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle row - Content Marketing, Brand Strategy, Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(2, 5).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                    {/* Content Marketing Mockup */}
                    {service.mockup === "content" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-xs text-gray-400">Content Pipeline</div>
                            <div className="text-xs text-green-400">Publishing...</div>
                          </div>
                          <div className="space-y-2 mb-3">
                            <div className="bg-gray-700 rounded p-2 flex items-center space-x-2">
                              <div className="w-3 h-3 bg-blue-500 rounded"></div>
                              <div className="text-xs text-gray-300">Blog Posts</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 flex items-center space-x-2">
                              <div className="w-3 h-3 bg-purple-500 rounded"></div>
                              <div className="text-xs text-gray-300">Social Graphics</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded"></div>
                              <div className="text-xs text-gray-300">Video Content</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-400">This Month</div>
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              className="text-sm font-bold text-white"
                            >
                              24 pieces
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Brand Strategy Mockup */}
                    {service.mockup === "branding" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="text-xs text-gray-400 mb-2">Brand Elements</div>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="w-6 h-6 rounded mx-auto mb-1 overflow-hidden">
                                <img 
                                  src="/femur logo.jpg" 
                                  alt="Femur Logo" 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="text-xs text-gray-300">Logo</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="flex space-x-1 justify-center mb-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              </div>
                              <div className="text-xs text-gray-300">Colors</div>
                            </div>
                          </div>
                          <div className="bg-gray-700 rounded p-2">
                            <div className="text-xs text-gray-400">Brand Voice</div>
                            <div className="space-y-1 mt-1">
                              <div className="bg-blue-600 h-1 w-full rounded"></div>
                              <div className="bg-purple-600 h-1 w-3/4 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Analytics Mockup */}
                    {service.mockup === "analytics" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="text-xs text-gray-400 mb-3">Campaign Performance</div>
                          <div className="grid grid-cols-2 gap-2 h-full">
                            <div className="bg-gray-700 rounded p-3 flex flex-col justify-center">
                              <div className="text-xs text-gray-400 mb-1">ROI</div>
                              <motion.div
                                animate={{ color: ["#10b981", "#3b82f6", "#10b981"] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="text-lg font-bold"
                              >
                                285%
                              </motion.div>
                            </div>
                            <div className="bg-gray-700 rounded p-3 flex flex-col justify-center">
                              <div className="text-xs text-gray-400 mb-1">Leads</div>
                              <div className="text-lg font-bold text-white">1.2K</div>
                            </div>
                            <div className="bg-gray-700 rounded p-3 flex flex-col justify-center">
                              <div className="text-xs text-gray-400 mb-1">Reach</div>
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="text-lg font-bold text-white"
                              >
                                45K
                              </motion.div>
                            </div>
                            <div className="bg-gray-700 rounded p-3 flex flex-col justify-center">
                              <div className="text-xs text-gray-400 mb-1">Conversion</div>
                              <div className="text-lg font-bold text-white">8.4%</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - Marketing Automation (full width) */}
          {services.slice(5).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm mb-6">{service.description}</p>

                    {/* Service Features */}
                    {service.badges && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {service.badges.map((badge, badgeIndex) => (
                          <div
                            key={badgeIndex}
                            className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700/50"
                          >
                            <div className="text-blue-400">{badge.icon}</div>
                            <span className="text-xs text-gray-300">{badge.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  
                </div>

                <div className="md:col-span-2">
                  <div className="aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden relative border border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                      {/* Marketing Automation Mockup */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full h-full"
                      >
                        <div className="bg-gray-800 rounded-lg p-4 h-full">
                          <div className="text-xs text-gray-400 mb-4">Customer Journey Automation</div>
                          <div className="grid grid-cols-4 gap-3 h-[calc(100%-24px)]">
                            <div className="bg-gray-700 rounded p-3 text-center">
                              <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                              </div>
                              <div className="text-xs text-gray-300">Lead Capture</div>
                            </div>
                            <div className="bg-gray-700 rounded p-3 text-center">
                              <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <Share2 className="w-4 h-4 text-white" />
                              </div>
                              <div className="text-xs text-gray-300">Email Sequence</div>
                            </div>
                            <div className="bg-gray-700 rounded p-3 text-center">
                              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <Target className="w-4 h-4 text-white" />
                              </div>
                              <div className="text-xs text-gray-300">Nurturing</div>
                            </div>
                            <div className="bg-gray-700 rounded p-3 text-center">
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center"
                              >
                                <TrendingUp className="w-4 h-4 text-white" />
                              </motion.div>
                              <div className="text-xs text-gray-300">Conversion</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
