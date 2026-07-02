import { useCallback, useEffect, useRef, useState } from "react";
import julianAlps from "@/assets/julian-alps.jpg";
import socaCanyon from "@/assets/soca-canyon.jpg";
import socaRiver from "@/assets/soca-river.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";
import gal1 from "@/assets/gallery/1000073996-exterior.jpg.asset.json";
import gal2 from "@/assets/gallery/1000074002-exterior.jpg.asset.json";
import gal3 from "@/assets/gallery/1000074001-exterior.jpg.asset.json";
import gal4 from "@/assets/gallery/1000074003-exterior.jpg.asset.json";
import gal5 from "@/assets/gallery/1000074004-exterior.jpg.asset.json";
import gal6 from "@/assets/gallery/1000074005-exterior.jpg.asset.json";
import gal7 from "@/assets/gallery/1000074006-exterior.jpg.asset.json";
import gal8 from "@/assets/gallery/1000074007-exterior.jpg.asset.json";
import gal9 from "@/assets/gallery/1000074008-exterior.jpg.asset.json";
import gal10 from "@/assets/gallery/1000074009-exterior.jpg.asset.json";
import gal11 from "@/assets/gallery/1000074010-exterior.jpg.asset.json";
import gal12 from "@/assets/gallery/1000074011-exterior.jpg.asset.json";
import gal13 from "@/assets/gallery/1000073995-interior.jpg.asset.json";
import gal14 from "@/assets/gallery/1000073988-interior.jpg.asset.json";
import gal15 from "@/assets/gallery/1000073998-interior.jpg.asset.json";
import gal16 from "@/assets/gallery/1000073997-interior.jpg.asset.json";
import gal17 from "@/assets/gallery/1000073991-interior.jpg.asset.json";
import gal18 from "@/assets/gallery/1000073994-interior.jpg.asset.json";
import gal19 from "@/assets/gallery/1000073993-interior.jpg.asset.json";
import gal20 from "@/assets/gallery/1000073992-interior.jpg.asset.json";
import gal21 from "@/assets/gallery/1000073989-interior.jpg.asset.json";
import gal22 from "@/assets/gallery/1000073990-interior.jpg.asset.json";
import gal23 from "@/assets/gallery/1000073999-interior.jpg.asset.json";
import gal24 from "@/assets/gallery/1000074000-interior.jpg.asset.json";
import nearbyKobarid from "@/assets/nearby/kobarid.jpg.asset.json";
import nearbyBoka from "@/assets/nearby/boka.jpg.asset.json";
import nearbySocaGorge1 from "@/assets/nearby/soca-gorge-1.jpg.asset.json";
import nearbySocaRiver from "@/assets/nearby/soca-river.jpg.asset.json";
import nearbyVirje from "@/assets/nearby/virje.jpg.asset.json";
import nearbyMuseum from "@/assets/nearby/museum.jpg.asset.json";
import nearbyKluze from "@/assets/nearby/kluze.jpg.asset.json";
import nearbyNapoleon from "@/assets/nearby/napoleon.jpg.asset.json";
import nearbyMangart from "@/assets/nearby/mangart.jpg.asset.json";
import nearbySocaGorge2 from "@/assets/nearby/soca-gorge-2.jpg.asset.json";

const GALLERY_IMAGES = [
  // First 4 stay: house exterior + aerial view
  gal3, gal4, gal5, gal6,
  // 8 greenery/exterior placed right after the aerial (top-down) image
  gal7, gal8, gal9, gal10, gal1, gal2, gal11, gal12,
  // Interior: living rooms
  gal13, gal14, gal15, gal16,
  // Kitchen & bathroom
  gal23, gal24, gal21, gal22,
  // Bedrooms
  gal17, gal18, gal19, gal20,
];

const NEARBY_TITLES: Record<string, { title: string; subtitle: string }> = {
  sl: { title: "V bližini", subtitle: "Izbrani izleti, razgledi in naravne znamenitosti v okolici Cottage Kobarid." },
  hr: { title: "U blizini", subtitle: "Odabrani izleti, vidikovci i prirodne znamenitosti u okolici Cottage Kobarid." },
  it: { title: "Nei dintorni", subtitle: "Escursioni, panorami e luoghi naturali scelti nei dintorni di Cottage Kobarid." },
  en: { title: "Nearby", subtitle: "Selected sights, viewpoints, and natural attractions around Cottage Kobarid." },
  de: { title: "In der Nähe", subtitle: "Ausgewählte Ausflüge, Aussichtspunkte und Naturhighlights rund um Cottage Kobarid." },
};

const NEARBY_PLACES = [
  { img: nearbyKobarid, name: "Kobarid" },
  { img: nearbyBoka, name: "Slap Boka" },
  { img: nearbySocaGorge1, name: "Soška korita" },
  { img: nearbySocaRiver, name: "Reka Soča" },
  { img: nearbyVirje, name: "Slap Virje" },
  { img: nearbyMuseum, name: "Kobariški muzej" },
  { img: nearbyKluze, name: "Trdnjava Kluže" },
  { img: nearbyNapoleon, name: "Napoleonov most" },
  { img: nearbyMangart, name: "Mangart" },
  { img: nearbySocaGorge2, name: "Soška korita" },
];

import {
  Waves,
  Mountain,
  Bike,
  Footprints,
  Fish,
  Snowflake,
  Sparkles,
  BookOpen,
  Droplets,
  Wind,
  MapPin,
  Facebook,
  Instagram,
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function HeroSection() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const nextMuted = !v.muted;
    v.muted = nextMuted;
    if (!nextMuted) {
      v.play().catch(() => {});
    }
    setMuted(nextMuted);
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroPoster.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <video
        ref={videoRef}
        src={heroVideo.url}
        poster={heroPoster.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-[1.6] md:scale-100 origin-center"
      />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Vklopi zvok" : "Izklopi zvok"}
        className="absolute bottom-6 right-6 z-10 p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition"
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <div className="relative h-full flex flex-col items-center text-center px-6 text-white max-w-4xl mx-auto pt-[55vh] md:pt-[60vh]" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}>
        <p className="italic text-xl md:text-2xl font-light opacity-95" style={{ letterSpacing: "0.01em" }}>
          {t.hero.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-lg md:text-xl font-light" style={{ lineHeight: 1.6 }}>
          {t.hero.subtitle}
        </p>
        <a href="#contact" className="btn-primary mt-8">
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="pt-24 pb-10 px-6" style={{ background: "var(--color-cream)" }}>
      <div ref={ref} className="fade-up max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "var(--color-forest)" }}>
          {t.about.title}
        </h2>
        <p className="mb-5 text-lg" style={{ color: "var(--color-charcoal)" }}>
          {t.about.body1}
        </p>
        <p className="mb-5 text-lg" style={{ color: "var(--color-text-muted)" }}>
          {t.about.body2}
        </p>
        {t.about.body3 && <p className="mb-5 text-lg" style={{ color: "var(--color-text-muted)" }}>{t.about.body3}</p>}
        {t.about.body4 && <p className="mb-5 text-lg" style={{ color: "var(--color-text-muted)" }}>{t.about.body4}</p>}
        {t.about.body5 && <p className="mb-5 text-lg" style={{ color: "var(--color-text-muted)" }}>{t.about.body5}</p>}
        {t.about.body6 && <p className="mb-5 text-lg" style={{ color: "var(--color-text-muted)" }}>{t.about.body6}</p>}
        {t.about.body7 && <p className="mb-5 text-lg" style={{ color: "var(--color-text-muted)" }}>{t.about.body7}</p>}
        {t.about.body8 && <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>{t.about.body8}</p>}
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
        <div className="text-[120px] leading-none font-bold" style={{ color: "var(--color-soca)", opacity: 0.2 }}>
          "
        </div>
        <h2 className="text-3xl md:text-4xl mb-8 -mt-8" style={{ color: "var(--color-forest)" }}>
          {t.romantic.title}
        </h2>
        <p className="mb-5 text-lg">{t.romantic.body1}</p>
        <p className="mb-5 text-lg">{t.romantic.body2}</p>
        <p className="text-lg italic" style={{ color: "var(--color-text-muted)" }}>
          {t.romantic.body3}
        </p>
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
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--color-forest)" }}>
            {t.activities.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--color-text-muted)" }}>
            {t.activities.subtitle}
          </p>
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
                <p className="mt-2 text-sm" style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  {item.description}
                </p>
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-3 text-sm list-disc pl-5 space-y-1" style={{ color: "var(--color-text-muted)" }}>
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}

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
        <h2 className="text-3xl md:text-4xl text-center mb-6" style={{ color: "var(--color-forest)" }}>
          {t.seasons.title}
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-12" style={{ color: "var(--color-text-muted)" }}>
          {t.seasons.body}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {t.seasons.cards.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ borderTop: `3px solid ${SEASON_COLORS[i]}` }}
            >
              <h3 className="text-lg font-semibold mb-2">{c.name}</h3>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                {c.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NearbySection() {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const copy = NEARBY_TITLES[lang] ?? NEARBY_TITLES.en;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + NEARBY_PLACES.length) % NEARBY_PLACES.length)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % NEARBY_PLACES.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <section className="py-24 px-6 bg-white">
      <div ref={ref} className="fade-up max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--color-forest)" }}>
            {copy.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--color-text-muted)" }}>
            {copy.subtitle}
          </p>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {NEARBY_PLACES.map((p, index) => (
            <button
              type="button"
              key={`${p.name}-${index}`}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-offset-2 text-left"
              aria-label={`Odpri fotografijo: ${p.name}`}
            >
              <img
                src={p.img.url}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-3 left-4 right-4 text-white font-semibold text-base md:text-lg" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                {p.name}
              </figcaption>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Zapri"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Prejšnja"
          >
            <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Naslednja"
          >
            <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="flex flex-col items-center">
            <img
              src={NEARBY_PLACES[lightboxIndex].img.url}
              alt={NEARBY_PLACES[lightboxIndex].name}
              className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <figcaption className="mt-3 text-white/90 font-semibold">
              {NEARBY_PLACES[lightboxIndex].name}
            </figcaption>
          </figure>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm tabular-nums">
            {lightboxIndex + 1} / {NEARBY_PLACES.length}
          </div>
        </div>
      )}
    </section>
  );
}

export function GallerySection() {

  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <section id="gallery" className="pt-10 pb-24 px-6" style={{ background: "var(--color-cream)" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--color-forest)" }}>
            {t.gallery.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--color-text-muted)" }}>
            {t.gallery.subtitle}
          </p>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="aspect-[4/3] rounded-xl overflow-hidden group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ background: "var(--color-soca-light)" }}
              aria-label={`Odpri fotografijo ${i + 1}`}
            >
              <img
                src={img.url}
                alt={`Cottage Kobarid ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Zapri"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Prejšnja"
          >
            <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Naslednja"
          >
            <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
          </button>
          <img
            src={GALLERY_IMAGES[lightboxIndex].url}
            alt={`Cottage Kobarid ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm tabular-nums">
            {lightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
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
          <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "var(--color-forest)" }}>
            {t.location.title}
          </h2>
          <p className="text-lg mb-8">{t.location.body}</p>
          <div className="space-y-3 mb-8 text-base">
            <p className="not-italic">
              <strong>Cottage Kobarid</strong><br />
              Mlinsko 18<br />
              5222 Kobarid
            </p>
            <p><strong>Email:</strong> <a href="mailto:cottage_kobarid@gmail.com" className="hover:underline">cottage_kobarid@gmail.com</a></p>
            <p><strong>GSM Alen:</strong> <a href="tel:+38641322720" className="hover:underline">00386 41 322 720</a></p>
            <p><strong>GSM Danijela:</strong> <a href="tel:+38640789122" className="hover:underline">00386 40 789 122</a></p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: "🚗", label: "Bovec — 30 min" },
              { icon: "🚗", label: "Tolmin — 20 min" },
              { icon: "🚗", label: "Tarvisio — ~1h" },
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
        <div className="rounded-2xl overflow-hidden min-h-[320px] h-full shadow-lg">
          <iframe
            title="Cottage Kobarid — Mlinsko 18, 5222 Kobarid"
            src="https://www.google.com/maps?q=Mlinsko+18,+5222+Kobarid,+Slovenija&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#activities", label: t.nav.activities },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <footer style={{ background: "var(--color-charcoal)", color: "var(--color-cream)" }} className="pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{t.footer.aboutTitle}</h3>
          <p className="text-sm" style={{ color: "var(--color-sand)" }}>
            {t.footer.aboutBody}
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{t.footer.contactTitle}</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Kobarid, Slovenija</li>
            <li>✉️ <a href="mailto:cottage_kobarid@gmail.com" className="hover:underline">cottage_kobarid@gmail.com</a></li>
            <li>📞 Alen: <a href="tel:+38641322720" className="hover:underline">00386 41 322 720</a></li>
            <li>📞 Danijela: <a href="tel:+38640789122" className="hover:underline">00386 40 789 122</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{t.footer.quickLinksTitle}</h3>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors" style={{ color: "var(--color-sand)" }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{t.footer.socialTitle}</h3>
          <div className="flex gap-4">
            {/* TODO: add FB page URL */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-[var(--color-soca)] transition-colors"
            >
              <Facebook size={24} />
            </a>
            {/* TODO: add IG handle */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-[var(--color-soca)] transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "var(--color-text-muted)" }}
      >
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
