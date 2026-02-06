import { ImageResponse } from "next/og";

export const alt = "Agro SouthWest - Exportación de Limones Premium desde Chile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2d5016 0%, #1a2f0d 50%, #0f1a08 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Agro SouthWest
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Limones Chile
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 24,
            }}
          >
            Exportación de limones premium
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: 999,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Global G.A.P.
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: 999,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Systems Approach
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
