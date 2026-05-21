"use client";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ConvirBanner from "./components/ConvirBanner";
import Branches from "./components/Branches";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ConvirBanner />
      <Branches />
      <Contact />
      <Footer />
    </main>
  );
}
