import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Quiz from "@/components/Quiz";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <StatsBar />
      <Services />
      <Quiz />
      <EmailCapture />
      <Footer />
      <ScrollReveal />
    </>
  );
}
