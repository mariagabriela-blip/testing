import type { Metadata } from "next";
import "./globals.css";

// ---------------------------------------------------------
// FONTS: cuando tengas los archivos .ttf, descomenta esto:
//
// import localFont from "next/font/local";
//
// const bodoni = localFont({
//   src: "../fonts/BodoniModa-VariableFont.ttf",
//   variable: "--font-bodoni",
//   display: "swap",
// });
//
// const futura = localFont({
//   src: "../fonts/FuturaPT-Book.ttf",
//   variable: "--font-futura",
//   display: "swap",
// });
//
// Y en el <body> agrega: className={`${bodoni.variable} ${futura.variable} antialiased`}
// ---------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Gabriela Kurtagic | Estratega de Negocios para el Mercado Latino en USA",
  description:
    "Economista y estratega de negocios ayudando a emprendedores latinos a crecer en el mercado estadounidense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
