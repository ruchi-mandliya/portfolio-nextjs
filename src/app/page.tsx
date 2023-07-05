import Image from "next/image";
import "./globals.css";
import React from "react";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Project from "./components/Project";

export default function Home() {
  return (
    <div>
      <Hero />

      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
