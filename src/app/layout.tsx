import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Descubre los 7 Pasos hacia tu Propio Negocio | Taller de Emprendimiento Estratégico",
  description:
    "Aprende a lanzar y hacer crecer tu negocio con nuestro taller de emprendimiento estratégico. Descubre cómo desarrollar un Producto Mínimo Viable (MVP), diseñar modelos de negocio innovadores y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
