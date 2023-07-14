import "./globals.css";
import type { Metadata } from "next";

import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "AiDios",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
