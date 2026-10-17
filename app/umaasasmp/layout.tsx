import type { Metadata } from "next";
import { Lobster } from "next/font/google";
import "../globals.css";
import { FaDiscord, FaPatreon, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next"

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | UMAasaSMP"
  },
  description: "Regular Survival Minecraft Server",
  openGraph: {
    title: 'UMAasaSMP',
    description: "Regular Survival Minecraft Server",
    url: 'https://stuffy-stuffs.com/umaasasmp',
    siteName: 'UMAasaSMP',
    images: [
      {
        url: "https://stuffy-stuffs.com/zoi_baterbonia.png",
        width: 1536,
        height: 1024
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-hidden w-full h-full">
      {children}
    </main>
  );
}
