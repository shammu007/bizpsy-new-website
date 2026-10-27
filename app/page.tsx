import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { HighlightBanner } from "@/components/sections/HighlightBanner";
import { Footer } from "@/components/sections/Footer";
import { FAQ_DATA, SERVICES_DATA } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

const serviceSchema: Record<string, { name: string; description: string }> = {
  "service-1": {
    name: "GTM Audit",
    description:
      "Paid entry point that delivers the go-to-market strategy: ICP, positioning, buyer personas, pricing and buyer research.",
  },
  "service-2": {
    name: "GTM Execution",
    description:
      "Puts the GTM strategy into motion with multi-channel campaigns: lead generation, social media, SEO/AEO and a GTM calendar.",
  },
  "service-3": {
    name: "GTM Automation",
    description:
      "Systemizes and scales what works with workflow automation, lead-gen tooling and pipeline acceleration.",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...SERVICES_DATA.items.map((service) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/#${service.id}`,
      name: serviceSchema[service.id]?.name ?? service.title,
      serviceType: "Go-To-Market Strategy",
      description: serviceSchema[service.id]?.description ?? service.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Early-stage B2B SaaS founders",
      },
      areaServed: "Worldwide",
      url: `${SITE_URL}/#services`,
    })),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_DATA.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VisionMission />
      <WhyChooseUs />
      <FAQ />
      <HighlightBanner />
      <Footer />
    </main>
  );
}
