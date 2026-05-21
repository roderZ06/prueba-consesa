import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CONSESA — Seguros R.D",
  description: "CONSESA es tu broker de confianza para seguros en República Dominicana. Con más de 25 años en el mercado, ofrecemos las mejores soluciones.",
  keywords: "seguros dominicana, CONVIR, CONSESA, seguro salud, seguro auto, seguro viaje, seguro incendio, consesa seguros convir, seguro de vehículos, seguro de salud, seguro de hogar, seguro de vida, seguro de accidentes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
