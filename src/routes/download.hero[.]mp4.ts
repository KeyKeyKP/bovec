import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/hero.mp4.asset.json";

const BASE_URL = "https://cottage-kobarid.si";

export const Route = createFileRoute("/download/hero.mp4")({
  server: {
    handlers: {
      GET: async () => {
        const videoUrl = `${BASE_URL}${heroAsset.url}`;
        const response = await fetch(videoUrl);

        if (!response.ok) {
          return new Response("Video ni najden", { status: 404 });
        }

        const headers = new Headers();
        headers.set("Content-Type", "video/mp4");
        headers.set("Content-Disposition", 'attachment; filename="hero.mp4"');
        headers.set("Cache-Control", "public, max-age=86400");

        const contentLength = response.headers.get("content-length");
        if (contentLength) {
          headers.set("Content-Length", contentLength);
        }

        return new Response(response.body, {
          status: 200,
          headers,
        });
      },
    },
  },
});
