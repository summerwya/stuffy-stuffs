import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaDiscord, FaPatreon, FaTiktok, FaYoutube } from "react-icons/fa6";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stuffy-Stuffs",
    template: "%s | Stuffy-Stuffs"
  },
  description: "A simple website showcasing skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center">
        <nav className="flex justify-between w-20 p-4 bg-white rounded-3xl w-[80%] m-2 text-rose-300 w-96 shadow-lg">
          <div className="hidden md:block">
            <h1 className="text-3xl">Digisite</h1>
          </div>
          <div className="flex items-center justify-center md:justify-around w-full md:w-fit gap-4 text-3xl md:text-xl">
            <a href="https://www.tiktok.com/@tzumi.miloo"><FaTiktok /></a>
            <a href="https://www.youtube.com/@Koliieclef"><FaYoutube /></a>
            <a href="https://www.patreon.com/c/summerwya"><FaPatreon /></a>
            <a href="https://discord.gg/aeUns7jrS8"><FaDiscord /></a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
