"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import logoImg from "../../public/logo-white-transparent.png";

const footerLinks = {
  "Empresa": ["Inicio", "Nosotros", "ConVir", "Sucursales"],
  "Contacto": ["servicios@consesa.do", "(809) 541-7300"],
};

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #001A4D 0%, #000D26 100%)", padding: "80px 24px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40, marginBottom: 64 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
              <Image src={logoImg} alt="CONSESA" height={40} style={{ height: "40px", width: "auto", display: "block" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Tu socio confiable en seguros en República Dominicana. Santo Domingo · Santiago · La Romana · San Pedro de Macorís.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://convir.do" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(30,136,229,0.2)", border: "1px solid rgba(66,165,245,0.3)", color: "#90CAF9", fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 999, textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(30,136,229,0.35)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(30,136,229,0.2)"; }}>
                <ExternalLink size={13} /> Portal ConVir
              </a>
              <a href="https://www.instagram.com/consesard/" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(30,136,229,0.2)", border: "1px solid rgba(66,165,245,0.3)", color: "#90CAF9", fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 999, textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(30,136,229,0.35)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(30,136,229,0.2)"; }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block" }}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>{title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href={title === "Contacto" ? (item.includes("@") ? `mailto:${item}` : item.startsWith("(") ? `tel:${item.replace(/\D/g,"")}` : `https://${item}`) : `#${item.toLowerCase()}`}
                      style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © {new Date().getFullYear()} CONSESA — Todos los derechos reservados.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
            servicios@consesa.do
          </p>
        </div>
      </div>

      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </footer>
  );
}
