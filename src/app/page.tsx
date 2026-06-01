import Hero from "@/components/Hero";
import FeaturedFlavors from "@/components/FeaturedFlavors";
import WaveDivider from "@/components/WaveDivider";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import DairySection from "@/components/DairySection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />

      <WaveDivider color="#FFF8F0" />
      <FeaturedFlavors />

      <WaveDivider color="#1A0A2E" flip />
      <About />

      <WaveDivider color="#1A0A2E" />
      <StatsCounter />

      <WaveDivider color="#FFF8F0" flip />
      <DairySection />

      <WaveDivider color="#1A0A2E" flip />
      <Gallery />

      <WaveDivider color="#FFF8F0" />
      <Testimonials />

      <WaveDivider color="#FFF8F0" flip />
      <ContactSection />

      <WaveDivider color="#1A0A2E" />
    </>
  );
}
