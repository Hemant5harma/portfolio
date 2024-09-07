import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { motion } from 'framer-motion';
import Card from '../components/card'; // Assuming this is the new Card component

const projects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

const ProjectCard = ({ title, description, image, link }) => (
  <Card className="w-full p-6 mb-8"> {/* Each card will now take the full width and stack vertically */}
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <ul className="mb-4">
      {description.map((item, i) => (
        <li key={i} className="text-gray-400 text-sm mb-1">• {item}</li>
      ))}
    </ul>
    <a href={link} className="text-green-500 hover:underline">Case Study →</a>
  </Card>
);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

        {/* Vertical card layout */}
        <div className="flex flex-row items-center"> {/* Flexbox layout for vertical stacking */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-2/3"
            >
              <ProjectCard 
                title={project.title}
                description={project.results.map(res => res.title)}
                image={project.image}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
