import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Highlights from "@/components/sections/Highlights";

// Forçar renderização dinâmica para evitar problemas com framer-motion
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Highlights />
    </>
  );
}

