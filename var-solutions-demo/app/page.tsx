import Areas from "@/components/Areas";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileCallBar from "@/components/MobileCallBar";
import QuoteForm from "@/components/QuoteForm";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Ticker from "@/components/Ticker";
import WhyUs from "@/components/WhyUs";
import { areas, business, images, site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: business.name,
  alternateName: `${business.shortName} – ${business.tagline}`,
  description: site.description,
  telephone: business.phoneE164,
  image: images.after.src,
  areaServed: areas.map((name) => ({ "@type": "Place", name })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <Services />
        <WhyUs />
        <Areas />
        <Reviews />
        <QuoteForm />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
