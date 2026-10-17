import type { Metadata } from "next";
import { Lobster } from "next/font/google";
import "./globals.css";
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
            {children}
        </body>
        </html>
    );
}
