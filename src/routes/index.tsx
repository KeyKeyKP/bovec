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
      { title: "Cottage Kobarid – Počitniška hiša za najem | Dolina Soče, Kobarid" },
      { name: "description", content: "Počitnice v Kobaridu – luksuzna počitniška hiša za najem v dolini Soče. Cottage Kobarid je idealno izhodišče za rafting, pohodništvo in aktivne počitnice v Julijskih Alpah." },
      { property: "og:title", content: "Cottage Kobarid – Počitniška hiša za najem | Dolina Soče, Kobarid" },
      { property: "og:description", content: "Počitnice v Kobaridu – luksuzna počitniška hiša za najem v dolini Soče." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cottage-kobarid.si/" },
      { property: "og:image", content: "https://cottage-kobarid.si/__l5e/assets-v1/18c7a063-f8d5-487b-a18e-0e041918fb8b/cottage-kobarid-og.jpg" },
      { name: "twitter:image", content: "https://cottage-kobarid.si/__l5e/assets-v1/18c7a063-f8d5-487b-a18e-0e041918fb8b/cottage-kobarid-og.jpg" },
      { name: "twitter:title", content: "Cottage Kobarid – Počitniška hiša za najem | Dolina Soče, Kobarid" },
      { name: "twitter:description", content: "Počitnice v Kobaridu – luksuzna počitniška hiša za najem v dolini Soče." },
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
          "@type": ["LodgingBusiness", "LocalBusiness"],
          "@id": "https://cottage-kobarid.si/#business",
          name: "Cottage Kobarid",
          description: "Počitnice v Kobaridu – luksuzna počitniška hiša za najem v dolini Soče. Idealno izhodišče za rafting, pohodništvo in aktivne počitnice v Julijskih Alpah.",
          url: "https://cottage-kobarid.si/",
          image: "https://cottage-kobarid.si/__l5e/assets-v1/18c7a063-f8d5-487b-a18e-0e041918fb8b/cottage-kobarid-og.jpg",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mlinsko 18",
            postalCode: "5222",
            addressLocality: "Kobarid",
            addressRegion: "Goriška",
            addressCountry: "SI",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 46.2475,
            longitude: 13.5789,
          },
          areaServed: "Dolina Soče, Slovenija",
          sameAs: [
            "https://facebook.com/",
            "https://instagram.com/",
          ],
          hasMap: "https://www.google.com/maps?q=Mlinsko+18,+5222+Kobarid,+Slovenija",
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
            { "@type": "LocationFeatureSpecification", name: "Parkirišče", value: true },
            { "@type": "LocationFeatureSpecification", name: "Vrt", value: true },
          ],
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Najem počitniške hiše" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nastanitev v dolini Soče" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Izhodišče za rafting in pohodništvo" } },
          ],
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
