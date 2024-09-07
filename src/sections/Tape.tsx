// components/FeaturedProjects.js
'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const ProjectCard = ({ title, description, image, link }) => (
  <motion.div 
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg min-w-[300px] mx-4"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="mb-4">
        {description.map((item, i) => (
          <li key={i} className="text-gray-400 text-sm mb-1">• {item}</li>
        ))}
      </ul>
      <a href={link} className="text-green-500 hover:underline">Case Study →</a>
    </div>
  </motion.div>
)

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Dark Saas Landing Page",
      description: [
        "Increased user engagement by 20%",
        "Boosted conversion rates by 15%",
        "Improved mobile traffic by 25%"
      ],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Light Saas Landing Page",
      description: [
        "Boosted sales by 30%",
        "Reduced bounce rate by 15%",
        "Increased user retention by 25%"
      ],
      image: "/project2.jpg",
      link: "#"
    },
    {
      title: "AI Startup Landing Page",
      description: [
        "Increased lead generation by 40%",
        "Improved user experience by 35%",
        "Boosted mobile traffic by 50%"
      ],
      image: "/project3.jpg",
      link: "#"
    }
  ]

  const containerRef = useRef(null)

  return (
    <section id="projects" className="bg-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

        {/* Horizontal scrollable container */}
        <motion.div
          ref={containerRef}
          className="flex overflow-x-scroll scrollbar-hide"
          drag="x"
          dragConstraints={{ right: 0, left: -containerRef.current?.scrollWidth + containerRef.current?.clientWidth }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
