import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodoni = localFont({
  src: [
    {
      path: "../fonts/BodoniModa-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/BodoniModa-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-bodoni",
  display: "swap",
});

const futura = localFont({
  src: [
    { path: "../fonts/FuturaCyrillicLight.ttf", weight: "300", style: "normal" },
    { path: "../fonts/FuturaCyrillicBook.ttf", weight: "400", style: "normal" },
    { path: "../fonts/FuturaCyrillicMedium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/FuturaCyrillicDemi.ttf", weight: "600", style: "normal" },
    { path: "../fonts/FuturaCyrillicBold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/FuturaCyrillicExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/FuturaCyrillicHeavy.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Gabriela Kurtagic | Estrategia · Finanzas · Marca",
  description:
    "Economista y estratega de negocios ayudando a emprendedores latinos a crecer en el mercado estadounidense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${bodoni.variable} ${futura.variable} antialiased`}>{children}</body>
    </html>
  );
}
