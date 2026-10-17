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
    default: "Stuffy-Stuffs",
    template: "%s | Stuffy-Stuffs"
  },
  description: "Stuff like tools",
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
