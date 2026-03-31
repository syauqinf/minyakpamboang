import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "./components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minyak Pamboang - PUSAKA MANDAR",
  description: "Minyak herbal tradisional dengan khasiat terjaga. Warisan asli Indonesia untuk kesehatan keluarga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes subtleWave {
              0% { background-position: 0% 50%; }
              25% { background-position: 50% 25%; }
              50% { background-position: 100% 50%; }
              75% { background-position: 50% 75%; }
              100% { background-position: 0% 50%; }
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.history.scrollRestoration) {
                window.history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}