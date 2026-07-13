## Cilj

Datoteke fotografij galerije trenutno nosijo generična imena tipa `1000073996-exterior.jpg`, `1000074001.jpg` itd. Google pri iskanju slik upošteva tudi ime datoteke — zato jih preimenujemo tako, da odražajo ALT opise (npr. `cottage-kobarid-zunanjost-terasa-vrt.jpg`). Ob tem postorimo še nekaj drugih SEO stvari za galerijo in slike.

## 1. Preimenovanje 24 fotografij galerije

Vsaka slika bo dobila kratko, opisno, s pomišljaji ločeno ime v angleščini (zaradi mednarodne iskalne uporabnosti — nemški, italijanski, hrvaški in angleški obiskovalci) in z jedrno ključno besedo `cottage-kobarid`.

Predlagana imena (usklajena z obstoječimi SL ALT opisi, vrstni red kot v galeriji):

```
01 cottage-kobarid-exterior-terrace-garden.jpg
02 cottage-kobarid-entrance-flowers-seating.jpg
03 cottage-kobarid-aerial-view-garden-terraces.jpg
04 cottage-kobarid-aerial-view-upper-terrace.jpg
05 cottage-kobarid-valley-mountain-view.jpg
06 cottage-kobarid-view-mountains-neighborhood.jpg
07 cottage-kobarid-upper-garden-terrace-lounger.jpg
08 cottage-kobarid-garden-lounge-outdoor-grill.jpg
09 cottage-kobarid-covered-terrace-dining.jpg
10 cottage-kobarid-pergola-lounge-mountain-view.jpg
11 cottage-kobarid-fire-pit-soca-valley-view.jpg
12 cottage-kobarid-upper-view-terrace-wooden-chairs.jpg
13 cottage-kobarid-dining-area-kitchen.jpg
14 cottage-kobarid-living-room-dining-sofa.jpg
15 cottage-kobarid-bright-living-room-wooden-table.jpg
16 cottage-kobarid-living-room-attic-stairs.jpg
17 cottage-kobarid-compact-kitchen-induction-oven.jpg
18 cottage-kobarid-modern-kitchen-wooden-surfaces.jpg
19 cottage-kobarid-bathroom-sink-wc.jpg
20 cottage-kobarid-bathroom-washing-machine.jpg
21 cottage-kobarid-attic-bedroom-four-beds.jpg
22 cottage-kobarid-attic-bedroom-cot.jpg
23 cottage-kobarid-attic-bedroom-single-double.jpg
24 cottage-kobarid-family-attic-bedroom.jpg
```

### Tehnična izvedba

Imena datotek so vgrajena v CDN URL (`/__l5e/assets-v1/{uuid}/{original_filename}`) že ob nalaganju — ne moremo jih spremeniti zgolj s preimenovanjem lokalne `.asset.json` datoteke. Zato:

1. Za vsako od 24 slik ponovno naložim isto vsebino v CDN pod novim imenom (`lovable-assets create ... --filename cottage-kobarid-...jpg`), kar posodobi ustrezno `.asset.json` datoteko z novim URL-jem.
2. Uvozi v `src/components/Sections.tsx` (`gal1`…`gal24`) že kažejo na `.asset.json`, tako da po ponovnem nalaganju in preimenovanju datotek asset.json ustrezno posodobim tudi importe.
3. Vrstni red v galeriji in ALT opisi (`translations.ts`) ostanejo enaki — le imena datotek se spremenijo.

## 2. Dodatne SEO izboljšave za slike

- **`loading="lazy"` in `decoding="async"`** na vseh galerijskih `<img>` (če še nista postavljena) za hitrejši LCP.
- **`width` in `height` atributi** na `<img>` — preprečimo CLS (Cumulative Layout Shift), kar Google upošteva pri Core Web Vitals.
- **`<figure>` + `<figcaption>`** za lightbox — semantični HTML pomeni bolj razumljivo strukturo za iskalnike (opcijsko; lahko obdržimo skrit `<figcaption>` samo za bralnike zaslonov).
- **JSON-LD schema `ImageGallery` / `LodgingBusiness` z `photo`**: v `<head>` dodam strukturiran zapis, ki vsaki sliki pripiše URL in opis. Google jih tako lahko poveže z nastanitvijo.
- **Preveritev poimenovanja ostalih slik** (hero poster, nearby atrakcije `boka.jpg`, `kluze.jpg`, `soca.jpg` itd.) — te so že smiselno poimenovane, dodam samo doslednost s predpono `cottage-kobarid-` kjer smiselno (npr. hero poster).

## 3. Kaj ostane nespremenjeno

- ALT besedila (ta so že odlična in prevedena v 5 jezikov).
- Vrstni red slik v galeriji.
- Vizualna postavitev in stil.
- Video, glasba in ostale funkcionalnosti.

## Vprašanje pred izvedbo

Predlagam imena datotek **v angleščini** (globalno bolje delujejo za Google Images, tudi za slovenske obiskovalce). Če želiš raje **v slovenščini** (npr. `cottage-kobarid-zunanjost-terasa-vrt.jpg`), samo reci in prilagodim seznam pred izvedbo.
