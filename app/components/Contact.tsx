"use client";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", color: "#1565C0", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "rgba(21,101,192,0.1)", padding: "5px 14px", borderRadius: 999, marginBottom: 16 }}>
            CONTÁCTANOS
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0D1B3E", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            ¿Listo para proteger lo que más importa?
          </h2>
          <p style={{ color: "#5C7BA8", fontSize: 17, marginTop: 16, maxWidth: 520, margin: "16px auto 0" }}>
            Un asesor CONSESA te guiará para elegir el plan perfecto para ti.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="contact-grid">
          {/* Info */}
          <div className="reveal">
            {[
              { icon: <Phone size={20} />, label: "Línea Principal", value: "(809) 541-7300", href: "tel:8095417300" },
              { icon: <Mail size={20} />, label: "Correo", value: "servicios@consesa.do", href: "mailto:servicios@consesa.do" },

            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg,#E8F0FE,#BBDEFB)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1565C0" }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#5C7BA8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{item.label}</div>
                  <a href={item.href} style={{ fontSize: 17, fontWeight: 700, color: "#0D1B3E", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#1565C0"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#0D1B3E"; }}>
                    {item.value}
                  </a>
                </div>
              </div>
            ))}

            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <a href="https://wa.me/18095417300" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 6px 24px rgba(37,211,102,0.35)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 34px rgba(37,211,102,0.5)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(37,211,102,0.35)"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/consesard/" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #1565C0, #1E88E5)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 6px 24px rgba(30,136,229,0.35)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 34px rgba(30,136,229,0.5)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(30,136,229,0.35)"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2" style={{ background: "#F0F4FF", borderRadius: 20, padding: "40px 36px" }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0D1B3E", marginBottom: 24, letterSpacing: "-0.02em" }}>Solicitar información</h3>
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { id: "name", label: "Nombre completo", type: "text", placeholder: "Tu nombre" },
                { id: "phone", label: "Teléfono", type: "tel", placeholder: "(809) 000-0000" },
                { id: "email", label: "Correo electrónico", type: "email", placeholder: "correo@ejemplo.com" },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2C4A7C", marginBottom: 6 }}>{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder}
                    style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #D0DEF5", borderRadius: 10, fontSize: 15, color: "#0D1B3E", background: "#fff", outline: "none", transition: "border-color 0.2s" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "#1565C0"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#D0DEF5"; }} />
                </div>
              ))}

              <button type="submit"
                style={{ background: "linear-gradient(135deg,#1565C0,#1E88E5)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 10, border: "none", cursor: "pointer", marginTop: 8, transition: "opacity 0.2s, transform 0.2s", boxShadow: "0 6px 20px rgba(21,101,192,0.4)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
