import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import {
  HeroSection, AboutSection, ActivitiesSection,
  SeasonsSection, NearbySection, GallerySection, LocationSection, Footer,
} from "@/components/Sections";
import { buildHead } from "@/lib/seo";

const LANG = "it" as const;

export const Route = createFileRoute("/it")({
  head: () => buildHead(LANG),
  component: () => (
    <LanguageProvider initialLang={LANG} lockLang>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ActivitiesSection />
        <SeasonsSection />
        <NearbySection />
        <LocationSection />
      </main>
      <Footer />
    </LanguageProvider>
  ),
});
