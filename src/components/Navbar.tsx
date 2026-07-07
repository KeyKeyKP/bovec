import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useLang } from "./LanguageContext";
import type { Lang } from "@/lib/translations";

const LANGS: Lang[] = ["sl", "hr", "it", "en", "de"];

const FLAGS: Record<Lang, string> = {
  sl: "🇸🇮",
  hr: "🇭🇷",
  it: "🇮🇹",
  en: "🇬🇧",
  de: "🇩🇪",
};

const PATH_BY_LANG: Record<Lang, string> = {
  sl: "/",
  hr: "/hr",
  it: "/it",
  en: "/en",
  de: "/de",
};

export function Navbar() {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const goToLang = (l: Lang) => {
    navigate({ to: PATH_BY_LANG[l] });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
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
          <div className="hidden md:flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => goToLang(l)}
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

        <div className="md:hidden flex items-center gap-3 ml-auto">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-2xl leading-none"
              aria-label="Izberi jezik"
              aria-expanded={langOpen}
            >
              {FLAGS[lang]}
            </button>
            {langOpen && (
              <div
                className="absolute top-full right-0 mt-2 flex gap-2 rounded-lg bg-white shadow-lg border px-2 py-2 z-50"
                style={{ borderColor: "var(--color-sand)" }}
              >
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => { goToLang(l); setLangOpen(false); }}
                    className={`text-xl leading-none rounded px-1 py-0.5 transition-colors ${lang === l ? "bg-[var(--color-soca-light)]" : "hover:bg-[var(--color-cream)]"}`}
                    aria-label={`Switch to ${l}`}
                  >
                    {FLAGS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "var(--color-charcoal)" }}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "var(--color-sand)" }}>
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
