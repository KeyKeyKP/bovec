import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Translation } from "@/lib/translations";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<Ctx | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
  initialLang?: Lang;
  lockLang?: boolean;
}

export function LanguageProvider({ children, initialLang = "sl", lockLang = false }: LanguageProviderProps) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    if (lockLang) return;
    try {
      const stored = sessionStorage.getItem("lang") as Lang | null;
      if (stored && translations[stored]) setLangState(stored);
    } catch {}
  }, [lockLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].meta.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", translations[lang].meta.description);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { sessionStorage.setItem("lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
