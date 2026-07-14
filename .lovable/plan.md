
Pripravim DOCX datoteko `/mnt/documents/hero-video-spremembe.docx` s kronološkim spiskom vseh sprememb, ki smo jih izvedli na hero video sekciji.

## Vsebina dokumenta

Kronološki pregled sprememb, razdeljen po sklopih:

1. **Prvotna postavitev hero videa**
   - Originalni CDN video (`hero.mp4`, asset `330004ca-b03c-461a-9746-cc2b969c16c4`)
   - Ločena glasba (`glasba.mp3`), predvajanje na klik
   - Poster slika

2. **Dvojna varianta (desktop + mobile)**
   - Uvedba `hero-mobile.mp4` za mobilne naprave
   - Uporaba `useIsMobile()` hooka v `Sections.tsx` za izbiro vira
   - Preloader (`VideoPreloader.tsx`) z ločenima viroma

3. **Predpomnjenje / preload**
   - `<link rel="preload" as="video">` v `__root.tsx`
   - `<link rel="preload" as="image">` za poster

4. **Download route (za prenos originalnega videa)**
   - Nova pot `/download/hero.mp4` (`src/routes/download.hero[.]mp4.ts`)
   - Server handler, ki streamа CDN video s `Content-Disposition: attachment`
   - Vpis v `routeTree.gen.ts`

5. **Vrnitev na eno samo verzijo (CDN)**
   - Odstranitev mobile variante iz `Sections.tsx`
   - Odstranitev `useIsMobile` in `heroVideoMobile` importov
   - Isti video za desktop in mobile, glasba ostane na klik

6. **Zamenjava vira z novim uploadanim videom**
   - Nov CDN asset iz `VID-20260622-WA0005.mp4`
   - Nadomeščen `src/assets/hero.mp4.asset.json` (nov asset ID `d7fa81ec-30ed-4fa7-afa1-05620898a539`)
   - Glasbene nastavitve nespremenjene

7. **Trenutno stanje**
   - Aktiven video: nov CDN asset
   - `Sections.tsx` uporablja isti vir za vse naprave
   - `/download/hero.mp4` še vedno kaže na trenutni `hero.mp4.asset.json`

## Tehnično

- Uporabim docx skill (`docx-js` prek `bun`/`npm`).
- Naslov, kratek uvod, oštevilčeni razdelki s podnaslovi in bullet točkami.
- Pisava Arial, US Letter, standardni robovi.
- Shrani v `/mnt/documents/hero-video-spremembe.docx` in prikaži `<presentation-artifact>`.
