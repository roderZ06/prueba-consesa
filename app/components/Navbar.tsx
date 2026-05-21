"use client";
import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import Image from "next/image";
import logoImg from "../../public/logo-white-transparent.png";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "ConVir", href: "#convir" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled ? "rgba(0,27,77,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 30px rgba(0,0,0,0.3)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className={`navbar-container ${scrolled ? "scrolled" : ""}`} style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#inicio" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image className={`navbar-logo ${scrolled ? "scrolled" : ""}`} src={logoImg} alt="CONSESA" height={160} style={{ width: "auto", display: "block" }} priority unoptimized />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.78)", fontSize: 14, fontWeight: 500, textDecoration: "none", padding: "8px 14px", borderRadius: 8, transition: "color 0.2s, background 0.2s" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "#fff"; (e.target as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.78)"; (e.target as HTMLElement).style.background = "transparent"; }}>
              {l.label}
            </a>
          ))}
          <a href="https://convir.do" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8, background: "linear-gradient(135deg,#1565C0,#1E88E5)", color: "#fff", fontSize: 13, fontWeight: 700, padding: "9px 18px", borderRadius: 999, textDecoration: "none", transition: "opacity 0.2s, transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
            <ExternalLink size={13} /> ConVir
          </a>
          <a href="#contacto"
            style={{ marginLeft: 4, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 18px", borderRadius: 999, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}>
            Portal de Clientes
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "#fff", cursor: "pointer" }} className="mobile-menu-btn" aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(0,27,77,0.97)", backdropFilter: "blur(16px)", padding: "12px 24px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", color: "rgba(255,255,255,0.85)", fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {l.label}
            </a>
          ))}
          <a href="https://convir.do" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 16, background: "linear-gradient(135deg,#1565C0,#1E88E5)", color: "#fff", fontWeight: 700, padding: "12px 20px", borderRadius: 999, textDecoration: "none", justifyContent: "center" }}>
            <ExternalLink size={15} /> Portal ConVir
          </a>
        </div>
      )}

      <style>{`
        .navbar-container {
          height: 168px;
          transition: height 0.3s ease;
        }
        .navbar-container.scrolled {
          height: 90px;
        }
        .navbar-logo {
          height: 144px;
          transition: height 0.3s ease;
        }
        .navbar-logo.scrolled {
          height: 72px;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .navbar-container, .navbar-container.scrolled {
            height: 72px;
          }
          .navbar-logo, .navbar-logo.scrolled {
            height: 56px;
          }
        }
      `}</style>
    </header>
  );
}
