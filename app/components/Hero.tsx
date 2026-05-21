"use client";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import bgImage from "../../public/hero-bg.png";

export default function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "linear-gradient(135deg, #001A4D 0%, #003B8E 60%, #1565C0 100%)" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src={bgImage} alt="" fill style={{ objectFit: "cover", opacity: 0.18 }} priority />
      </div>

      {/* Glow orbs */}
      <div className="glow-orb" style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,136,229,0.35) 0%, transparent 70%)", zIndex: 1 }} />
      <div className="glow-orb" style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.3) 0%, transparent 70%)", zIndex: 1, animationDelay: "2s" }} />

      {/* Grid overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Content */}
      <div className="hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", width: "100%" }}>
        <div style={{ maxWidth: 780 }}>


          {/* Headline */}
          <h1 className="reveal reveal-delay-1 gradient-text" style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Respaldo integral en cada paso de tu vida y negocio
          </h1>

          {/* Sub */}
          <p className="reveal reveal-delay-2" style={{ color: "rgba(255,255,255,0.70)", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, marginBottom: 40, maxWidth: 600 }}>
            En CONSESA te ofrecemos las mejores soluciones en seguros de CONVIR. Salud, vehículos, viaje, incendio y más — todo con asesoría personalizada en Santo Domingo, Santiago, La Romana y San Pedro de Macorís.
          </p>

          {/* CTAs */}
          <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #1565C0, #1E88E5)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 8px 30px rgba(30,136,229,0.45)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(30,136,229,0.6)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(30,136,229,0.45)"; }}>
              <PhoneCall size={16} /> Contactar Asesor
            </a>
            <a href="#convir" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.22)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 999, textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.16)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}>
              Portal ConVir <ArrowRight size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
            {[["4", "Sucursales"], ["8+", "Productos"], ["30+", "Años en el mercado"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: "#fff", fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em" }}>{n}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 500, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, transparent, #F0F4FF)", zIndex: 3 }} />
      <style>{`
        .hero-content {
          padding: 150px 24px 80px;
        }
        @media (max-width: 1024px) {
          .hero-content {
            padding: 112px 20px 60px;
          }
        }
      `}</style>
    </section>
  );
}
