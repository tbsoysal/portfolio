import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
});

const plusjakartasans = localFont({
  src: "../public/fonts/PlusJakartaSans-Variable.ttf",
});

export const metadata: Metadata = {
  title: "Tahaberk Soysal | Front-end Developer & Product Builder",
  description:
    "Portfolio of Tahaberk Soysal, a Front-end Developer specializing in Next.js, TypeScript, and building validated SaaS products.",
  keywords: [
    "Front-end Developer",
    "Next.js Developer",
    "TypeScript",
    "SahaDijital",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Tahaberk Soysal" }],
  creator: "Tahaberk Soysal",
  other: {
    google: "notranslate",
  },
  // Open Graph is how your site looks when shared on LinkedIn, X, or Discord
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tahaberksoysal.com",
    title: "Tahaberk Soysal | Front-end Developer",
    description: "Explore web applications and case studies built by Tahaberk.",
    siteName: "Tahaberk Soysal Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full ${plusjakartasans.className} bg-[#e5e5e5]`}>
        <main className="p-8 md:p-12 lg:px-20 lg:py-14 xl:px-32 xl:py-12 max-w-400 mx-auto">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
