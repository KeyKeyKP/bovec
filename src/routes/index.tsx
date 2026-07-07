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
      { name: "description", content: "Luksuzna hiša Cottage Kobarid v srcu doline Soče in Triglavskega narodnega parka. Idealno izhodišče za rafting, pohodništvo in pustolovščine v Julijskih Alpah." },
      { property: "og:title", content: "Cottage Kobarid — Najem hiše v dolini Soče" },
      { property: "og:description", content: "Vaš dom v srcu Triglavskega narodnega parka. Luksuzna hiša za najem v Kobaridu, dolina Soče." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cottage-kobarid.si/" },
      { property: "og:image", content: "https://cottage-kobarid.si/og-image.jpg" },
      { name: "twitter:image", content: "https://cottage-kobarid.si/og-image.jpg" },
      { name: "twitter:title", content: "Cottage Kobarid — Najem hiše v dolini Soče" },
      { name: "twitter:description", content: "Vaš dom v srcu Triglavskega narodnega parka." },
    ],
    links: [
      { rel: "canonical", href: "https://cottage-kobarid.si/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" },
      { rel: "alternate", hrefLang: "sl", href: "https://cottage-kobarid.si/" },
      { rel: "alternate", hrefLang: "hr", href: "https://cottage-kobarid.si/hr" },
      { rel: "alternate", hrefLang: "it", href: "https://cottage-kobarid.si/it" },
      { rel: "alternate", hrefLang: "en", href: "https://cottage-kobarid.si/en" },
      { rel: "alternate", hrefLang: "de", href: "https://cottage-kobarid.si/de" },
      { rel: "alternate", hrefLang: "x-default", href: "https://cottage-kobarid.si/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Cottage Kobarid",
          description: "Luksuzna hiša za najem v Kobaridu, v srcu doline Soče in Triglavskega narodnega parka.",
          url: "https://cottage-kobarid.si/",
          image: "https://cottage-kobarid.si/og-image.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mlinsko 18",
            postalCode: "5222",
            addressLocality: "Kobarid",
            addressCountry: "SI",
          },
          areaServed: "Dolina Soče, Slovenija",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider initialLang="sl">
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
  );
}
