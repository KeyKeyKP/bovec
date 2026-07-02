import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "./LanguageContext";
import type { Lang } from "@/lib/translations";

const LANGS: Lang[] = ["sl", "hr", "it", "en", "de"];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#activities", label: t.nav.activities },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.08)]" : ""}`}
      style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <a href="#home" className="text-lg sm:text-xl font-bold whitespace-nowrap" style={{ color: "var(--color-forest)" }}>
            Cottage Kobarid
          </a>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setLang(l)}
                  className={`uppercase tracking-wider font-semibold transition-colors ${lang === l ? "underline" : ""}`}
                  style={{ color: lang === l ? "var(--color-soca)" : "var(--color-text-muted)" }}
                  aria-label={`Switch to ${l}`}
                >
                  {l}
                </button>
                {i < LANGS.length - 1 && <span style={{ color: "var(--color-sand)" }}>·</span>}
              </span>
            ))}
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "var(--color-charcoal)" }}
        >
          {open ? <Menu size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "var(--color-sand)" }}>
          <div className="flex items-center gap-3 px-6 pt-4 pb-2 text-sm">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                <button
                  onClick={() => { setLang(l); }}
                  className={`uppercase font-semibold tracking-wider transition-colors ${lang === l ? "underline" : ""}`}
                  style={{ color: lang === l ? "var(--color-soca)" : "var(--color-text-muted)" }}
                  aria-label={`Switch to ${l}`}
                >
                  {l}
                </button>
                {i < LANGS.length - 1 && <span style={{ color: "var(--color-sand)" }}>·</span>}
              </span>
            ))}
          </div>
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
