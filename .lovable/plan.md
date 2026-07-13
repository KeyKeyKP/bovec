Naredim posebno pot za prenos prvega videa (hero.mp4) z glavo `Content-Disposition: attachment`, tako da brskalnik datoteko samodejno shrani namesto da bi jo predvajal.

Tehnične podrobnosti:
- Datoteka: `src/routes/download.hero[.]mp4.ts` → pot `/download/hero.mp4`
- Vrsta: TanStack Start server route (server.handlers.GET)
- Vir: prvi video iz CDN `src/assets/hero.mp4.asset.json` (asset ID `330004ca-b03c-461a-9746-cc2b969c16c4`)
- Implementacija: `fetch` videa iz CDN, streamanje odgovora nazaj uporabniku z glavama `Content-Type: video/mp4` in `Content-Disposition: attachment; filename="hero.mp4"`
- Po potrebi dodam še `Content-Length`, če ga CDN vrne
- Preverim delovanje z curl in brskalnikom