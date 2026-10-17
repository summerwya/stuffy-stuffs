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
    title: "Community Made",
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
            className="h-full antialiased"
        >
        <body className="h-full flex flex-col items-center">
            <Analytics />
            <nav className="flex justify-between w-20 p-4 bg-white rounded-3xl w-[80%] m-2 text-rose-300 w-96 shadow-lg">

            </nav>
            <main className="overflow-hidden">
                {children}
            </main>
        </body>
        </html>
    );
}
