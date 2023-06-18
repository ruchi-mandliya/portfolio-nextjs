import Image from "next/image";
import React from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Contact />
    </div>
  );
}
