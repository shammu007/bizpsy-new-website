import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HighlightBanner } from "@/components/sections/HighlightBanner";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VisionMission />
      <WhyChooseUs />
      <HighlightBanner />
      <Footer />
    </main>
  );
}
