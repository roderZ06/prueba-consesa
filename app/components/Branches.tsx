"use client";
import { MapPin, Phone } from "lucide-react";

const branches = [
  { city: "Santo Domingo", tag: "Sede Principal", phones: ["(809) 541-7300"], color: "#003B8E" },
  { city: "Santiago", tag: "Zona Norte", phones: ["(809) 276-9000", "(809) 489-2880"], color: "#1565C0" },
  { city: "La Romana", tag: "Zona Este", phones: ["(809) 813-5300"], color: "#1E88E5" },
  { city: "San Pedro de Macorís", tag: "Zona Este", phones: ["(809) 529-7300"], color: "#42A5F5" },
];

export default function Branches() {
  return (
    <section id="sucursales" style={{ background: "linear-gradient(135deg, #001A4D 0%, #003B8E 100%)", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", color: "#90CAF9", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "rgba(30,136,229,0.15)", border: "1px solid rgba(66,165,245,0.3)", padding: "5px 14px", borderRadius: 999, marginBottom: 16 }}>
            PRESENCIA NACIONAL
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Nuestras Sucursales
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginTop: 16, maxWidth: 520, margin: "16px auto 0" }}>
            Estamos cerca de ti. Cuatro puntos de atención en todo el país.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {branches.map((b, i) => (
            <div key={b.city} className={`reveal reveal-delay-${i + 1}`}
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "32px 28px", backdropFilter: "blur(10px)", transition: "background 0.3s, transform 0.3s", cursor: "default" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 12, background: `linear-gradient(135deg,${b.color},#42A5F5)`, marginBottom: 18 }}>
                <MapPin size={22} color="#fff" />
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#90CAF9", marginBottom: 6 }}>{b.tag}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>{b.city}</h3>
              {b.phones.map(p => (
                <a key={p} href={`tel:${p.replace(/\D/g,"")}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 500, textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}>
                  <Phone size={14} /> {p}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
