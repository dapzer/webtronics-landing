import Head from 'next/head'
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Technologies from "@/components/technologies/Technologies";
import Steps from "@/components/steps/Steps";

export default function Home() {
  return (
    <div className={"container"}>
      <Hero />
      <About />
      <Technologies />
      <Steps />
    </div>
  )
}
