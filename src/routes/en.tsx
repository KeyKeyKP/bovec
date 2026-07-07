import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import {
  HeroSection, AboutSection, ActivitiesSection,
  SeasonsSection, NearbySection, GallerySection, LocationSection, Footer,
} from "@/components/Sections";
import { translations } from "@/lib/translations";

const LANG = "en" as const;
const BASE = "https://cottage-kobarid.si";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: translations[LANG].meta.title },
      { name: "description", content: translations[LANG].meta.description },
      { property: "og:title", content: translations[LANG].meta.title },
      { property: "og:description", content: translations[LANG].meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE}/en` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:title", content: translations[LANG].meta.title },
      { name: "twitter:description", content: translations[LANG].meta.description },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en` },
      { rel: "alternate", hrefLang: "sl", href: `${BASE}/` },
      { rel: "alternate", hrefLang: "hr", href: `${BASE}/hr` },
      { rel: "alternate", hrefLang: "it", href: `${BASE}/it` },
      { rel: "alternate", hrefLang: "en", href: `${BASE}/en` },
      { rel: "alternate", hrefLang: "de", href: `${BASE}/de` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Cottage Kobarid",
          description: translations[LANG].meta.description,
          url: `${BASE}/en`,
          image: `${BASE}/og-image.jpg`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mlinsko 18",
            postalCode: "5222",
            addressLocality: "Kobarid",
            addressCountry: "SI",
          },
          areaServed: "Soča Valley, Slovenia",
        }),
      },
    ],
  }),
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
