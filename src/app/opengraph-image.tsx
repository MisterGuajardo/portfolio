import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const dynamic = "force-static";

export const alt = `${site.name} — ${site.role}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(135deg, #050505 0%, #0f0f12 60%, #1a1214 100%)",
          color: "#f6f1ea",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 72,
            width: 108,
            height: 108,
            borderRadius: 14,
            background: "#c73e3a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            color: "#f6f1ea",
            fontFamily: "serif",
          }}
        >
          全
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#c73e3a",
            fontFamily: "monospace",
            letterSpacing: 2,
            marginBottom: 28,
          }}
        >
          {'// ' + site.role}
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            fontFamily: "serif",
          }}
        >
          Matias Guajardo Palacios
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#e594ab",
            fontFamily: "serif",
            marginTop: 20,
          }}
        >
          En camino hacia la arquitectura de software
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8b857a",
            fontFamily: "monospace",
            marginTop: 56,
          }}
        >
          {site.url}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
