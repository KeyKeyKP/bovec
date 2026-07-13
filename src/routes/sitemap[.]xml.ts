import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://cottage-kobarid.si";

// Gallery images: [cdn-path, caption]
const GALLERY_IMAGES: Array<[string, string]> = [
  ["cottage-kobarid-exterior-terrace-garden.jpg", "Zunanjost počitniške hiše Cottage Kobarid s teraso in vrtom ob gozdu"],
  ["cottage-kobarid-entrance-flowers-seating.jpg", "Vhod v počitniško hišo Kobarid s cvetjem in sedeži pred hišo"],
  ["cottage-kobarid-aerial-view-garden-terraces.jpg", "Pogled iz zraka na počitniško hišo Kobarid in vrtne terase"],
  ["cottage-kobarid-aerial-view-upper-terrace.jpg", "Pogled iz zraka na počitniško hišo v Kobaridu z zgornjo teraso za počitek"],
  ["cottage-kobarid-valley-mountain-view.jpg", "Pogled na počitniško hišo Kobarid in dolino z razgledom na okoliške gore"],
  ["cottage-kobarid-view-mountains-neighborhood.jpg", "Razgled iz počitniške hiše v Kobaridu na gore in okoliške hiše"],
  ["cottage-kobarid-upper-garden-terrace-lounger.jpg", "Zgornja vrtna terasa počitniške hiše Kobarid z ležalnikom in stopnicami"],
  ["cottage-kobarid-garden-lounge-outdoor-grill.jpg", "Vrtni lounge in zunanji žar ob počitniški hiši v Kobaridu"],
  ["cottage-kobarid-covered-terrace-dining.jpg", "Pokrita terasa počitniške hiše Cottage Kobarid z mizo in stoli"],
  ["cottage-kobarid-pergola-lounge-mountain-view.jpg", "Pergola s sedežno garnituro pri počitniški hiši Kobarid in pogledom na gore"],
  ["cottage-kobarid-fire-pit-soca-valley-view.jpg", "Kurišče ob počitniški hiši Kobarid z razgledom na dolino Soče"],
  ["cottage-kobarid-upper-view-terrace-wooden-chairs.jpg", "Zgornja razgledna terasa počitniške hiše Kobarid z lesenimi stoli"],
  ["cottage-kobarid-dining-area-kitchen.jpg", "Jedilni kotiček in kuhinja v počitniški hiši Cottage Kobarid"],
  ["cottage-kobarid-living-room-dining-sofa.jpg", "Dnevni prostor počitniške hiše Kobarid z mizo, klopmi in kotno sedežno garnituro"],
  ["cottage-kobarid-bright-living-room-wooden-table.jpg", "Svetel dnevni prostor počitniške hiše v Kobaridu z leseno jedilno mizo"],
  ["cottage-kobarid-living-room-attic-stairs.jpg", "Dnevni prostor počitniške hiše Cottage Kobarid s stopnicami v mansardo"],
  ["cottage-kobarid-compact-kitchen-induction-oven.jpg", "Kompaktna kuhinja počitniške hiše v Kobaridu z indukcijsko ploščo in pečico"],
  ["cottage-kobarid-modern-kitchen-wooden-surfaces.jpg", "Moderna kuhinja v počitniški hiši Cottage Kobarid z lesenimi površinami"],
  ["cottage-kobarid-bathroom-sink-wc.jpg", "Kopalnica počitniške hiše v Kobaridu z umivalnikom in WC-jem"],
  ["cottage-kobarid-bathroom-washing-machine.jpg", "Pralni stroj v kopalnici počitniške hiše Cottage Kobarid"],
  ["cottage-kobarid-attic-bedroom-four-beds.jpg", "Mansardna spalnica počitniške hiše v Kobaridu s štirimi posteljami"],
  ["cottage-kobarid-attic-bedroom-cot.jpg", "Mansardna spalnica počitniške hiše Cottage Kobarid z več ležišči in otroško posteljico"],
  ["cottage-kobarid-attic-bedroom-single-double.jpg", "Podstrešna spalnica v počitniški hiši Kobarid z enojnimi in zakonskimi posteljami"],
  ["cottage-kobarid-family-attic-bedroom.jpg", "Družinska spalnica v mansardi počitniške hiše Cottage Kobarid"],
];

// Load asset URLs at build time so sitemap URLs stay in sync with CDN.
const galleryModules = import.meta.glob<{ default: { url: string; original_filename: string } }>(
  "@/assets/gallery/cottage-kobarid-*.asset.json",
  { eager: true },
);

function resolveImageUrl(filename: string): string | null {
  for (const mod of Object.values(galleryModules)) {
    if (mod.default.original_filename === filename) {
      return `${BASE_URL}${mod.default.url}`;
    }
  }
  return null;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  images?: Array<{ loc: string; title?: string; caption?: string }>;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const galleryImageEntries = GALLERY_IMAGES
          .map(([fname, caption]) => {
            const loc = resolveImageUrl(fname);
            if (!loc) return null;
            return { loc, title: caption, caption };
          })
          .filter((v): v is NonNullable<typeof v> => v !== null);

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", images: galleryImageEntries },
          { path: "/en", changefreq: "weekly", priority: "0.9" },
          { path: "/de", changefreq: "weekly", priority: "0.9" },
          { path: "/it", changefreq: "weekly", priority: "0.9" },
          { path: "/hr", changefreq: "weekly", priority: "0.9" },
        ];

        const urls = entries.map((e) => {
          const lines: string[] = [`  <url>`, `    <loc>${BASE_URL}${e.path}</loc>`];
          if (e.changefreq) lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
          if (e.priority) lines.push(`    <priority>${e.priority}</priority>`);
          if (e.images) {
            for (const img of e.images) {
              lines.push(`    <image:image>`);
              lines.push(`      <image:loc>${escapeXml(img.loc)}</image:loc>`);
              if (img.title) lines.push(`      <image:title>${escapeXml(img.title)}</image:title>`);
              if (img.caption) lines.push(`      <image:caption>${escapeXml(img.caption)}</image:caption>`);
              lines.push(`    </image:image>`);
            }
          }
          lines.push(`  </url>`);
          return lines.join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
