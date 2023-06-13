import React from "react";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Header from "../components/Header/Header";

export default function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe/>
      {/* 
      
      <Projects/> */}
    </div>
  );
}
