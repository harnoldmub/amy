import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.css";

const fontSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontDisplay = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.local"),
  title: {
    default: "Arnold Mubuanga Yate | Consultant IT & Chef de projet",
    template: "%s | Arnold Mubuanga Yate",
  },
  description:
    "Site portfolio premium d'Arnold Mubuanga Yate, consultant IT, chef de projet et ingénieur logiciel pour missions de conseil, delivery et produits digitaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${fontSans.variable} ${fontDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
