# Instagram link in "Kje nas najdete"

## Change
In the contact section (`LocationSection` in `src/components/Sections.tsx`), add a minimal Instagram entry under the existing contact details (address / email / phone numbers):

- Instagram icon (lucide-react `Instagram`, line style, consistent with existing icons)
- Handle text `@cottage_kobarid` next to it
- Whole item links to `https://instagram.com/cottage_kobarid` (opens in a new tab)
- Minimal styling: no button, no background — just the icon and handle, colored with existing theme tokens (forest / text-muted), matching the contact list typography

## Also
- Add the Instagram URL to `sameAs` in the JSON-LD structured data (`buildBusinessJsonLd`), since the profile now exists — the code comment in the Footer notes this was deferred until real profiles existed.
- No translation changes needed: the handle `@cottage_kobarid` is identical in all languages.

## Files
- `src/components/Sections.tsx` (LocationSection + JSON-LD sameAs)
