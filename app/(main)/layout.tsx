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
      <>
        <nav className="flex justify-between w-20 p-4 bg-white rounded-3xl w-[80%] m-2 text-rose-300 w-96 shadow-lg">
          <div className="hidden md:flex flex-row items-center gap-3">
            <Image
                src="/chu.png"
                width="50"
                height="50"
                alt="Icon"
                className="rounded-full"
              />
            <h1 className={"text-3xl " + lobster.className}>Stuffy-Stuffs</h1>
          </div>
          <div className="flex items-center justify-center md:justify-around w-full md:w-fit gap-4 text-3xl md:text-xl">
            <a href="https://x.com/digi_animator"><FaTwitter /></a>
            <a href="https://www.youtube.com/@Koliieclef"><FaYoutube /></a>
            <a href="https://www.patreon.com/c/summerwya"><FaPatreon /></a>
            <a href="https://discord.gg/aeUns7jrS8"><FaDiscord /></a>
            <a href="https://www.tiktok.com/@tzumi.miloo"><FaTiktok /></a>
          </div>
        </nav>
        <main className="overflow-hidden">
          {children}
        </main>
      </>
  );
}
