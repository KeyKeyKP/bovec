
Da, to je izvedljivo. Ko naložiš drugi video (npr. `bovec-hero-mobile.mp4`), spletna stran samodejno prepozna napravo in predvaja ustrezno različico.

## Kako bo delovalo

- **Namizje / tablica** (širina ≥ 768 px): predvaja obstoječi `bovec-hero.mp4`
- **Mobilne naprave** (širina < 768 px): predvaja novi mobilni video (npr. bolj pokončen / lažji format)

Uporabimo že obstoječi hook `useIsMobile()` (prag 768 px), ki ga projekt že ima.

## Kaj potrebujem od tebe

1. **Datoteka mobilnega videa** — naloži jo v `public/video/` (predlog: `bovec-hero-mobile.mp4`).
2. **Poster slika za mobilno** (neobvezno, priporočljivo) — `public/video/bovec-hero-mobile-poster.jpg`. Če je ne dodaš, uporabimo obstoječega.

Priporočila za mobilni video:
- Format 9:16 ali 4:5 (pokončno) če želiš drugačno kompozicijo, ali 16:9 če je enak izrez
- Kodek H.264 (MP4), največ ~5–8 MB za hitro nalaganje
- Trajanje podobno obstoječemu

## Tehnične spremembe

- **`src/components/Sections.tsx`** (Hero sekcija): dodam pogoj `const src = isMobile ? "/video/bovec-hero-mobile.mp4" : "/video/bovec-hero.mp4"` in enako za poster.
- **`src/components/VideoPreloader.tsx`**: uporabi `useIsMobile()` in izbere pravi `VIDEO_SRC` + poster, tako da se predpomni le ustrezna različica (da mobilni uporabniki ne prenašajo namiznega videa in obratno).
- Med preklopom naprave (npr. rotacija/resize) uporabimo `key={src}` na `<video>` elementu, da se pravilno ponovno naloži.

## Rezervni scenarij

Če datoteke mobilnega videa ni najti (404), avtomatsko pade nazaj na `bovec-hero.mp4`, tako da stran nikoli ne ostane brez ozadja.

---

Ali potrdiš imeni `bovec-hero-mobile.mp4` in `bovec-hero-mobile-poster.jpg`, ali imaš raje drugi imeni?
