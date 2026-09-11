import { translations, type Lang } from "./translations";

export const BASE_URL = "https://cottage-kobarid.si";

const OG_IMAGE = `${BASE_URL}/__l5e/assets-v1/18c7a063-f8d5-487b-a18e-0e041918fb8b/cottage-kobarid-og.jpg`;

const ALL_LANGS: Lang[] = ["sl", "hr", "it", "en", "de"];

const PATH_BY_LANG: Record<Lang, string> = {
  sl: "/",
  hr: "/hr",
  it: "/it",
  en: "/en",
  de: "/de",
};

const OG_LOCALE: Record<Lang, string> = {
  sl: "sl_SI",
  hr: "hr_HR",
  it: "it_IT",
  en: "en_GB",
  de: "de_DE",
};

const AREA_SERVED: Record<Lang, string[]> = {
  sl: ["Kobarid", "Dolina Soče", "Julijske Alpe", "Triglavski narodni park", "Slovenija"],
  hr: ["Kobarid", "Dolina Soče", "Julijske Alpe", "Nacionalni park Triglav", "Slovenija"],
  it: ["Caporetto", "Valle dell'Isonzo", "Alpi Giulie", "Parco nazionale del Tricorno", "Slovenia"],
  en: ["Kobarid", "Soča Valley", "Julian Alps", "Triglav National Park", "Slovenia"],
  de: ["Kobarid", "Soča-Tal", "Julische Alpen", "Triglav-Nationalpark", "Slowenien"],
};

// Amenities are limited to what the site content actually documents.
const AMENITIES: Record<Lang, string[]> = {
  sl: ["Wi-Fi", "Parkirišče", "Vrt", "Terasa", "Zunanji žar", "Kurišče", "Opremljena kuhinja", "Pralni stroj", "Klimatska naprava", "Otroška posteljica", "Razgled na gore"],
  hr: ["Wi-Fi", "Parking", "Vrt", "Terasa", "Vanjski gril", "Ognjište", "Opremljena kuhinja", "Perilica", "Klima", "Dječji krevetić", "Pogled na planine"],
  it: ["Wi-Fi", "Parcheggio", "Giardino", "Terrazza", "Griglia esterna", "Focolare", "Cucina attrezzata", "Lavatrice", "Aria condizionata", "Culla", "Vista sulle montagne"],
  en: ["Wi-Fi", "Parking", "Garden", "Terrace", "Outdoor grill", "Fire pit", "Fully equipped kitchen", "Washing machine", "Air conditioning", "Baby cot", "Mountain views"],
  de: ["WLAN", "Parkplatz", "Garten", "Terrasse", "Außengrill", "Feuerstelle", "Voll ausgestattete Küche", "Waschmaschine", "Klimaanlage", "Babybett", "Bergblick"],
};

const GUEST_UNIT: Record<Lang, string> = {
  sl: "oseb",
  hr: "osoba",
  it: "persone",
  en: "guests",
  de: "Personen",
};

export function canonicalUrl(lang: Lang): string {
  return `${BASE_URL}${PATH_BY_LANG[lang]}`;
}

/**
 * schema.org LodgingBusiness / VacationRental for the property.
 *
 * TODO(stranka): `geo` so trenutno koordinate središča Kobarida, ne hiše na
 * Mlinskem 18. Zamenjaj z natančnimi koordinatami iz Google Maps (6 decimalk),
 * takoj ko jih dobimo od lastnika.
 */
export function buildBusinessJsonLd(lang: Lang) {
  const t = translations[lang];

  return {
    "@context": "https://schema.org",
    "@type": ["VacationRental", "LodgingBusiness"],
    "@id": `${BASE_URL}/#business`,
    name: "Cottage Kobarid",
    description: t.meta.description,
    inLanguage: lang,
    url: canonicalUrl(lang),
    image: OG_IMAGE,
    telephone: "+38641322720",
    email: "cottage_kobarid@gmail.com",
    priceRange: "€€",
    currenciesAccepted: "EUR",
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
    hasMap: "https://www.google.com/maps?q=Mlinsko+18,+5222+Kobarid,+Slovenija",
    areaServed: AREA_SERVED[lang],
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 5,
      unitText: GUEST_UNIT[lang],
    },
    amenityFeature: AMENITIES[lang].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };
}

/** Meta, links and JSON-LD shared by every language route. */
export function buildHead(lang: Lang) {
  const t = translations[lang];
  const url = canonicalUrl(lang);

  return {
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.title },
      { property: "og:description", content: t.meta.description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: OG_LOCALE[lang] },
      ...ALL_LANGS.filter((l) => l !== lang).map((l) => ({
        property: "og:locale:alternate",
        content: OG_LOCALE[l],
      })),
      { name: "twitter:title", content: t.meta.title },
      { name: "twitter:description", content: t.meta.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: url },
      ...ALL_LANGS.map((l) => ({
        rel: "alternate",
        hrefLang: l,
        href: canonicalUrl(l),
      })),
      { rel: "alternate", hrefLang: "x-default", href: canonicalUrl("en") },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBusinessJsonLd(lang)),
      },
    ],
  };
}
