import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodoni = localFont({
  src: "../fonts/BodoniModa-VariableFont_opsz,wght.ttf",
  variable: "--font-bodoni",
  display: "swap",
});

const futura = localFont({
  src: "../fonts/FuturaCyrillicBook.ttf",
  variable: "--font-futura",
  display: "swap",
});

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
      <body className={`${bodoni.variable} ${futura.variable} antialiased`}>{children}</body>
    </html>
  );
}
