
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fuerzas-armadas-farf.vercel.app"),

  title: {
    default: "FARF | Fuerzas Armadas de la Federación Rusa",
    template: "%s | FARF",
  },

  description:
    "Portal institucional de FARF, Fuerzas Armadas de la Federación Rusa. Comunidad independiente dedicada a la simulación militar y actividades organizadas en videojuegos.",

  applicationName: "FARF",

  keywords: [
    "FARF",
    "Fuerzas Armadas de la Federación Rusa",
    "simulación militar",
    "BRM5",
    "MTC",
    "Cold War",
    "Roblox",
  ],

  authors: [{ name: "FARF" }],

  openGraph: {
    title: "FARF | Fuerzas Armadas de la Federación Rusa",
    description:
      "Portal institucional de la comunidad de simulación FARF.",
    url: "https://fuerzas-armadas-farf.vercel.app",
    siteName: "FARF",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
