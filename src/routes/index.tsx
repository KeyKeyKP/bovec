import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import {
  HeroSection, AboutSection, ActivitiesSection,
  SeasonsSection, NearbySection, GallerySection, LocationSection, Footer,
} from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cottage Kobarid — Najem hiše v dolini Soče" },
      { name: "description", content: "Luksuzna hiša v Bovcu, v srcu Triglavskega narodnega parka. Idealno izhodišče za rafting, pohodništvo in pustolovščine v dolini Soče." },
      { property: "og:title", content: "Cottage Kobarid — Najem hiše v dolini Soče" },
      { property: "og:description", content: "Vaš dom v srcu Triglavskega narodnega parka." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" },
      { rel: "alternate", hrefLang: "sl", href: "/" },
      { rel: "alternate", hrefLang: "hr", href: "/" },
      { rel: "alternate", hrefLang: "it", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "de", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        
        <ActivitiesSection />
        <SeasonsSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
