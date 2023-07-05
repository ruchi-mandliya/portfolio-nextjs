import Image from "next/image";
import "./globals.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
// import Project from "./components/Project";

export default function Home() {
  return (
    <div className="form-container">
      <Hero />
      <About />
      {/* <Project /> */}
      <Contact />
    </div>
  );
}
