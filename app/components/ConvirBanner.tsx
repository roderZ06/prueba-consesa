"use client";
import { ExternalLink } from "lucide-react";

export default function ConvirBanner() {
  return (
    <section id="convir" style={{ background: "#F0F4FF", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="reveal" style={{
          background: "linear-gradient(135deg, #003B8E 0%, #1565C0 50%, #1E88E5 100%)",
          borderRadius: 28, padding: "60px 48px", position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32
        }}>
          {/* Glow */}
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          {/* Text */}
          <div style={{ position: "relative", zIndex: 1, maxWidth: 600 }}>
            <span style={{ display: "inline-block", color: "#90CAF9", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>
              HERRAMIENTA VIRTUAL DE CONSESA
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 16 }}>
              Accede al Portal ConVir
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 16, lineHeight: 1.7, marginBottom: 0 }}>
              ConVir es la plataforma virtual oficial de CONSESA. Consulta tu póliza, realiza pagos, descarga certificados y gestiona tus seguros en línea, desde cualquier lugar.
            </p>
          </div>

          {/* Buttons */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 12, minWidth: 220 }}>
            <a href="https://convir.do" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#fff", color: "#003B8E", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 999, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 6px 24px rgba(0,0,0,0.2)", whiteSpace: "nowrap" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 34px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.2)"; }}>
              <ExternalLink size={16} /> Ir a ConVir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
