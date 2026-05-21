"use client";
import { Target, Eye, Star } from "lucide-react";

const cards = [
  {
    icon: <Target size={28} />,
    label: "Misión",
    title: "Nuestra razón de ser",
    body: "Brindar acceso a los mejores productos de seguros CONVIR con asesoría personalizada, honestidad y compromiso, protegiendo el patrimonio y la tranquilidad de cada cliente en República Dominicana.",
  },
  {
    icon: <Eye size={28} />,
    label: "Visión",
    title: "Hacia dónde vamos",
    body: "Ser la red de distribución de seguros más confiable del país, referente en calidad de servicio, cercanía con el cliente y excelencia profesional en cada una de nuestras sucursales.",
  },
  {
    icon: <Star size={28} />,
    label: "Valores",
    title: "Lo que nos guía",
    body: "Confianza, transparencia, compromiso, profesionalismo y vocación de servicio. Actuamos con ética en cada interacción, poniendo siempre los intereses del cliente en primer lugar.",
  },
];

export default function About() {
  return (
    <section id="nosotros" style={{ background: "#F0F4FF", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", color: "#1565C0", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "rgba(21,101,192,0.1)", padding: "5px 14px", borderRadius: 999, marginBottom: 16 }}>
            NUESTRA ESENCIA
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0D1B3E", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Identidad Institucional
          </h2>
          <p style={{ color: "#5C7BA8", fontSize: 17, marginTop: 16, maxWidth: 560, margin: "16px auto 0" }}>
            Los principios que orientan nuestro trabajo y la relación con cada cliente.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {cards.map((c, i) => (
            <div key={c.label} className={`reveal reveal-delay-${i + 1} card-hover`}
              style={{ background: "#fff", border: "1px solid #D0DEF5", borderRadius: 20, padding: "36px 32px", cursor: "default" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg,#E8F0FE,#BBDEFB)", color: "#1565C0", marginBottom: 20 }}>
                {c.icon}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1E88E5", marginBottom: 8 }}>{c.label}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0D1B3E", marginBottom: 12, letterSpacing: "-0.02em" }}>{c.title}</h3>
              <p style={{ color: "#5C7BA8", lineHeight: 1.7, fontSize: 15 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
