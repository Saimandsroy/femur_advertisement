"use client"
import { motion } from "framer-motion"
import { Target, Users, Award, TrendingUp, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "150+", label: "Clients Served", icon: Users },
    { number: "300%", label: "Average ROI", icon: TrendingUp },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "95%", label: "Client Retention", icon: Heart },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line and business growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of marketing trends and leverage cutting-edge tools to give you a competitive edge.",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description:
        "We work as an extension of your team, understanding your business deeply to deliver personalized solutions.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former marketing director at Fortune 500 companies with 10+ years of experience in digital marketing and brand strategy.",
      image: "/team-sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      bio: "Award-winning creative professional specializing in brand identity and content creation for high-growth startups.",
      image: "/team-michael.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Strategist",
      bio: "Social media expert who has managed campaigns for brands with millions of followers across all major platforms.",
      image: "/team-emily.jpg",
    },
  ]

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Femur</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're a results-driven marketing agency that transforms businesses through strategic advertising and social
            media management. Our mission is to amplify your brand's voice and accelerate your growth.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded in 2019, Femur emerged from a simple observation: too many businesses were struggling to cut
                through the digital noise and connect with their ideal customers. We saw talented entrepreneurs with
                amazing products and services who just needed the right marketing strategy to thrive.
              </p>
              <p>
                What started as a small team of marketing enthusiasts has grown into a full-service agency that's helped
                over 150 businesses transform their marketing efforts. We've worked with everyone from scrappy startups
                to established enterprises, always with the same goal: delivering measurable results that drive real
                business growth.
              </p>
              <p>
                Today, we're proud to be the marketing partner that businesses trust to amplify their brand, engage
                their audience, and accelerate their success in an increasingly competitive digital landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Femur?</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Proven track record with 300% average ROI for our clients</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Full-service approach covering all your marketing needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Data-driven strategies backed by comprehensive analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Dedicated account management and transparent reporting</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                <value.icon className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
