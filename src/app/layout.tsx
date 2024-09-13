import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Importar a fonte Montserrat do Google Fonts
const montserrat = Montserrat({
  subsets: ['latin'], // Escolha o subset de caracteres conforme necessário
  weight: ['400', '700'], // Pesos de fonte que você deseja usar
});

export const metadata: Metadata = {
  title: "Onano",
  description: "OLIMPÍADA NACIONAL DE NANOTECNOLOGIA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
