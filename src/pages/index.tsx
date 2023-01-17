import Head from 'next/head'
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Technologies from "@/components/technologies/Technologies";

export default function Home() {
  return (
    <div className={"container"}>
      <Hero />
      <About />
      <Technologies />
    </div>
  )
}
