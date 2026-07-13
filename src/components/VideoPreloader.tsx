import { useEffect, useState, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const VIDEO_SRC_DESKTOP = "/video/bovec-hero.mp4";
const VIDEO_SRC_MOBILE = "/video/bovec-hero-mobile.mp4";
const POSTER_DESKTOP = "/video/bovec-hero-poster.jpg";
const POSTER_MOBILE = "/video/bovec-hero-mobile-poster.jpg";

export function VideoPreloader({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();
  const videoSrc = isMobile ? VIDEO_SRC_MOBILE : VIDEO_SRC_DESKTOP;
  const posterSrc = isMobile ? POSTER_MOBILE : POSTER_DESKTOP;

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setProgress(100);
      // brief delay so the 100% state is visible
      setTimeout(() => setReady(true), 250);
    };

    const video = document.createElement("video");
    video.src = VIDEO_SRC;
    video.preload = "auto";
    video.muted = true;
    (video as HTMLVideoElement & { playsInline: boolean }).playsInline = true;

    const onCanPlay = () => finish();
    const onProgress = () => {
      try {
        if (video.buffered.length && video.duration) {
          const pct = Math.min(99, (video.buffered.end(0) / video.duration) * 100);
          setProgress((p) => Math.max(p, pct));
        }
      } catch {}
    };
    const onError = () => finish(); // don't block forever on error

    video.addEventListener("canplaythrough", onCanPlay);
    video.addEventListener("loadeddata", onCanPlay);
    video.addEventListener("progress", onProgress);
    video.addEventListener("error", onError);

    // safety timeout: never block more than 8s
    const timeout = setTimeout(finish, 8000);

    // fake progress so the bar moves even before buffered events fire
    const tick = setInterval(() => {
      setProgress((p) => (p < 90 ? p + 2 : p));
    }, 200);

    video.load();

    return () => {
      clearTimeout(timeout);
      clearInterval(tick);
      video.removeEventListener("canplaythrough", onCanPlay);
      video.removeEventListener("loadeddata", onCanPlay);
      video.removeEventListener("progress", onProgress);
      video.removeEventListener("error", onError);
    };
  }, []);

  return (
    <>
      {children}
      <div
        aria-hidden={ready}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/video/bovec-hero-poster.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          opacity: ready ? 0 : 1,
          pointerEvents: ready ? "none" : "auto",
          transition: "opacity 0.6s ease",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div style={{ position: "relative", fontSize: 28, fontWeight: 700, letterSpacing: "0.02em" }}>Cottage Kobarid</div>
        <div style={{ position: "relative", marginTop: 24, width: 220, height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 999, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "#fff",
              transition: "width 0.3s ease",
            }}
          />
        </div>
        <div style={{ position: "relative", marginTop: 12, fontSize: 12, opacity: 0.8 }}>{Math.round(progress)}%</div>
      </div>
    </>
  );
}
