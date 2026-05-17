import { useEffect, useRef, useState } from "react";
import {
  Waves, Mountain, Bike, Footprints, Fish, Snowflake,
  Sparkles, BookOpen, Droplets, Wind, MapPin, Facebook, Instagram, MessageCircle
} from "lucide-react";
import { useLang } from "./LanguageContext";
import { SEASON_COLORS } from "@/lib/translations";

const ACT_ICONS = [Waves, Mountain, Bike, Footprints, Fish, Snowflake, Sparkles, BookOpen, Droplets, Wind];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function HeroSection() {
  const { t } = useLang();
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 hero-placeholder" />
      <video
        autoPlay muted loop playsInline preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
        onCanPlay={() => setVideoReady(true)}
        poster=""
      >
        <source src="/video/bovec-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55))" }} />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white max-w-4xl mx-auto">
        <h1 className="font-bold text-[32px] md:text-[52px] leading-tight" style={{ letterSpacing: "0.01em" }}>
          {t.hero.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl font-light" style={{ lineHeight: 1.6 }}>
          {t.hero.subtitle}
        </p>
        <a href="#booking" className="btn-primary mt-10">{t.hero.cta}</a>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--color-cream)" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "var(--color-forest)" }}>{t.about.title}</h2>
          <p className="mb-5 text-lg" style={{ color: "var(--color-charcoal)" }}>{t.about.body1}</p>
          <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>{t.about.body2}</p>
        </div>
        <div className="grid grid-cols-2 gap-2" style={{ gridTemplateRows: "repeat(2, 200px)" }}>
          <img src="https://picsum.photos/seed/bovec1/600/400" alt="" loading="lazy" className="rounded-xl w-full h-full object-cover" />
          <img src="https://picsum.photos/seed/alps3/600/600" alt="" loading="lazy" className="rounded-xl w-full h-full object-cover row-span-2" />
          <img src="https://picsum.photos/seed/soca2/600/400" alt="" loading="lazy" className="rounded-xl w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function RomanticSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 px-6 relative" style={{ background: "var(--color-soca-light)" }}>
      <div ref={ref} className="fade-up max-w-3xl mx-auto text-center">
        <div className="text-[120px] leading-none font-bold" style={{ color: "var(--color-soca)", opacity: 0.2 }}>“</div>
        <h2 className="text-3xl md:text-4xl mb-8 -mt-8" style={{ color: "var(--color-forest)" }}>{t.romantic.title}</h2>
        <p className="mb-5 text-lg">{t.romantic.body1}</p>
        <p className="mb-5 text-lg">{t.romantic.body2}</p>
        <p className="text-lg italic" style={{ color: "var(--color-text-muted)" }}>{t.romantic.body3}</p>
      </div>
    </section>
  );
}

export function ActivitiesSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="activities" className="py-24 px-6 bg-white">
      <div ref={ref} className="fade-up max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--color-forest)" }}>{t.activities.title}</h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--color-text-muted)" }}>{t.activities.subtitle}</p>
        </div>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {t.activities.items.map((item, i) => {
            const Icon = ACT_ICONS[i] ?? Sparkles;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "var(--color-sand)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-soca)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-sand)")}
              >
                <Icon size={28} style={{ color: "var(--color-soca)" }} />
                <h3 className="mt-4 text-base font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SeasonsSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 px-6" style={{ background: "var(--color-cream)" }}>
      <div ref={ref} className="fade-up max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-6" style={{ color: "var(--color-forest)" }}>{t.seasons.title}</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-12" style={{ color: "var(--color-text-muted)" }}>{t.seasons.body}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {t.seasons.cards.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm" style={{ borderTop: `3px solid ${SEASON_COLORS[i]}` }}>
              <h3 className="text-lg font-semibold mb-2">{c.name}</h3>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{c.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="booking" className="py-24 px-6 bg-white">
      <div ref={ref} className="fade-up max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--color-forest)" }}>{t.booking.title}</h2>
        <p className="mb-10 text-lg" style={{ color: "var(--color-text-muted)" }}>{t.booking.subtitle}</p>
        {/* TODO: Replace src with actual Booking.com property URL */}
        <div className="rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] max-w-4xl mx-auto">
          <iframe
            src="https://www.booking.com/searchresults.html?ss=Bovec%2C+Slovenia"
            width="100%"
            height={520}
            loading="lazy"
            title="Booking.com reservation"
            style={{ border: "none", display: "block" }}
          />
        </div>
        <a
          href="https://www.booking.com/searchresults.html?ss=Bovec%2C+Slovenia"
          target="_blank" rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          {t.booking.cta}
        </a>
      </div>
    </section>
  );
}

export function LocationSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "var(--color-cream)" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "var(--color-forest)" }}>{t.location.title}</h2>
          <p className="text-lg mb-8">{t.location.body}</p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: "🚗", label: "Kobarid — 30 min" },
              { icon: "🚗", label: "Tolmin — 45 min" },
              { icon: "🚗", label: "Tarvisio — 45 min" },
              { icon: "✈️", label: "Ljubljana Airport — ~2h" },
            ].map((b) => (
              <span
                key={b.label}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "var(--color-soca-light)", color: "var(--color-forest)" }}
              >
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        </div>
        <div
          className="rounded-2xl flex flex-col items-center justify-center min-h-[320px]"
          style={{ background: "var(--color-soca-light)" }}
        >
          <MapPin size={48} style={{ color: "var(--color-soca)" }} />
          <p className="mt-4 font-semibold" style={{ color: "var(--color-forest)" }}>Bovec, Slovenija</p>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>46.3369° N, 13.5521° E</p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  useEffect(() => {
    const u = "info"; const d = "bocevhisa.si";
    document.querySelectorAll<HTMLAnchorElement>("[data-mail]").forEach((el) => {
      el.href = `mailto:${u}@${d}`;
      el.textContent = `${u}@${d}`;
    });
  }, [lang]);
  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#activities", label: t.nav.activities },
    { href: "#booking", label: t.nav.booking },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <footer style={{ background: "var(--color-charcoal)", color: "#e8e8e6" }} className="pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{t.footer.aboutTitle}</h3>
          <p className="text-sm" style={{ color: "#bdb9b1" }}>{t.footer.aboutBody}</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{t.footer.contactTitle}</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Bovec, Slovenija</li>
            <li>✉️ <a data-mail href="#" className="hover:underline">info</a></li>
            <li>📞 +386 XX XXX XXXX</li>
            <li>
              <a
                href="https://wa.me/386000000000"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full text-white font-semibold text-sm"
                style={{ background: "#25D366" }}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{t.footer.quickLinksTitle}</h3>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-white transition-colors" style={{ color: "#bdb9b1" }}>{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{t.footer.socialTitle}</h3>
          <div className="flex gap-4">
            {/* TODO: add FB page URL */}
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[var(--color-soca)] transition-colors">
              <Facebook size={24} />
            </a>
            {/* TODO: add IG handle */}
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[var(--color-soca)] transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "#9c9893" }}>
        <p>{t.footer.rights}</p>
        <p>
          {t.footer.siteBy}{" "}
          <a href="https://keykey.si" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Key Key s.p. | keykey.si
          </a>
        </p>
      </div>
    </footer>
  );
}
