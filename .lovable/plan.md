## Zastavice za izbiro jezika v mobilni vrstici

### Trenutno stanje
- Na mobilnih napravah so jeziki skriti znotraj hamburger menija (tekstovni gumbi SL · HR · IT · EN · DE).
- Uporabnik želi zastavice v vrhnji vrstici, med logotipom in hamburger gumbom.

### Spremembe

1. **Novi mobilni language selector (Navbar.tsx)**
   - Dodaj med logo "Cottage Kobarid" in hamburger gumb.
   - Vedno prikaži slovensko zastavico (🇸🇮).
   - Ob kliku se pod njo razpre vrstica ostalih zastavic: 🇭🇷, 🇮🇹, 🇬🇧, 🇩🇪.
   - Klik na zastavico zamenja jezik in zapre meni.
   - Uporabi `useState` za odprt/zaprt.

2. **Odstranitev iz mobilnega dropdowna**
   - Iz mobilnega hamburger menija odstrani tekstovni del z jeziki, ker je zdaj v vrhnji vrstici.
   - Nav povezave (Domov, O nas, ...) ostanejo v dropdownu.

3. **Stil**
   - Zastavice prikaži kot emoji, povečane na `text-xl`/`text-2xl` za boljšo vidnost.
   - Lahko obroba ali zaobljenost za lepši izgled.
   - Prehod med odprtim in zaprtim stanjem (`transition-all`).

4. **Prevodi in dostopnost**
   - `aria-label` na gumbu: "Izberi jezik" / "Choose language" (glede na trenutni jezik).
   - `aria-expanded` za stanje.

### Implementacija
- Sprememba samo v `src/components/Navbar.tsx`.
- Uporabi obstoječi `useLang()` in `setLang()`.
- Brez novih odvisnosti (lucide že vključen, emoji so sistemski).
