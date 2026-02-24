import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Quiz from "@/components/Quiz";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Quiz />
      <EmailCapture />
      <Footer />
    </>
  );
}
