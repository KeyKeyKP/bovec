
## Cilj
Vsaka od 24 slik v galeriji dobi natančen, opisen `alt` z lokalno ključno besedo, v vseh 5 jezikih (SL, HR, IT, EN, DE).

## Kako pripravim opise
Pred pisanjem si pogledam vsako fotografijo (imam dostop do datotek v `src/assets/gallery/`) in opišem točno tisto, kar je na sliki — npr. ali je kuhinja, spalnica, dnevna soba, kopalnica, terasa, pogled na goro itd. Ne izmišljam si detajlov, ki jih na sliki ni. Če za katero sliko ne bo mogoče varno določiti prostora, uporabim splošen a resničen opis (npr. "notranjost počitniške hiše").

Slog: **opisno + ključna beseda**, npr.
- "Dnevna soba počitniške hiše Cottage Kobarid z lesenim stropom in kaminom"
- "Zunanjost počitniške hiše v Kobaridu z vrtom in pogledom na Julijske Alpe"

## Spremembe v kodi

**1) `src/lib/translations.ts`** — v vsak jezikovni blok (`sl`, `hr`, `it`, `en`, `de`) dodam:
```ts
gallery: {
  title: ...,
  subtitle: ...,
  alts: [
    "…opis slike 1…",
    "…opis slike 2…",
    // … 24 opisov, indeksi ujemajoči z vrstnim redom v GALLERY_IMAGES
  ],
}
```
Slovenske opise napišem ročno po ogledu slik; ostale 4 jezike prevedem konsistentno (in ohranim lokalno ključno besedo v ustreznem jeziku: "vacation house Kobarid", "casa vacanze Kobarid", "kuća za odmor Kobarid", "Ferienhaus Kobarid").

**2) `src/components/Sections.tsx`** (GallerySection, vrstici 537 in 579) — namesto generičnega `alt={`Cottage Kobarid ${i + 1}`}` uporabim:
```tsx
alt={t.gallery.alts[i] ?? `Cottage Kobarid ${i + 1}`}
```
Enako v lightboxu za `GALLERY_IMAGES[lightboxIndex]`. `aria-label` gumba (vrstica 533) prav tako iz `t.gallery.alts[i]`.

## Preverjanje
- `bun run build` uspe.
- V DOM-u (`<img alt="...">`) so vidni novi, edinstveni opisi na vseh jezikovnih poteh (`/`, `/en`, `/de`, `/it`, `/hr`).

## Kaj potrebujem od tebe
Nič — sam pogledam slike in napišem opise. Če imaš dodatne informacije o konkretnih prostorih (npr. koliko spalnic, poimenovanje sob), lahko napišeš, drugače opišem, kar vidim.
