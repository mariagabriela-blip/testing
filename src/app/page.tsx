import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import ColorBlocks from "@/components/ColorBlocks";
import Services from "@/components/Services";
import Quiz from "@/components/Quiz";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CursorGlow from "@/components/CursorGlow";
import Popup from "@/components/Popup";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Popup />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <StatsBar />
      <ColorBlocks />
      <Services />
      <Quiz />
      <EmailCapture />
      <Footer />
      <ScrollReveal />
    </>
  );
}
