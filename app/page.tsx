import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink relative">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
