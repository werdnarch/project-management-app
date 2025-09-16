import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/providers";
import { Inter, Lato } from "next/font/google";
import SideNav from "@/components/elements/SideNav";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const LatoFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Next Starter Temp",
  description: "This is my personal next-starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${LatoFont.variable} ${InterFont.variable}`}
      >
        <Providers>
          <main className="h-full w-full flex items-center">
            <SideNav />
            <section className="h-full flex-1">{children}</section>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
