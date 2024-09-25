'use client'

import AboutMe from "@/sections/About";
import ContactSection from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import FeaturedProjects from "@/sections/Tape";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProjects/>
      <ContactSection/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}
