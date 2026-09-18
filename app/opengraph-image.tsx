import { ImageResponse } from "next/og";

export const alt = "SouMoster — Android Game Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0F172A",
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(108, 99, 255, 0.3) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(255, 183, 3, 0.15) 0%, transparent 60%)",
        padding: "60px 80px",
        color: "#F8FAFC",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Logo Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundColor: "rgba(108, 99, 255, 0.25)",
              border: "2px solid rgba(108, 99, 255, 0.5)",
              color: "#6C63FF",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            S
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#F8FAFC",
                letterSpacing: "-0.5px",
              }}
            >
              SouMoster
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#94A3B8",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Android Game Developer
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 18px",
            borderRadius: "999px",
            backgroundColor: "rgba(34, 197, 94, 0.15)",
            border: "1px solid rgba(34, 197, 94, 0.4)",
            color: "#4ADE80",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Google Play Verified Developer
        </div>
      </div>

      {/* Center Title & Tagline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "960px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 900,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            margin: 0,
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #94A3B8 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Building Fun, Addictive Android Games.
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#CBD5E1",
            marginTop: "20px",
            lineHeight: 1.4,
            maxWidth: "780px",
          }}
        >
          Fast-paced arcade action crafted for mobile. Download Road Hopper free
          on Google Play.
        </p>
      </div>

      {/* Bottom Highlights & Badges */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 24px",
            borderRadius: "16px",
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "16px",
            color: "#F8FAFC",
            fontWeight: 600,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#22C55E" }} />
          <span>Road Hopper Live (v9.4.7)</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 24px",
            borderRadius: "16px",
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "16px",
            color: "#F8FAFC",
            fontWeight: 600,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#FFB703" }} />
          <span>Bank Hopper Closed Beta (v0.7.4)</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 24px",
            borderRadius: "16px",
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "16px",
            color: "#F8FAFC",
            fontWeight: 600,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#6C63FF" }} />
          <span>100% Free to Play</span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
