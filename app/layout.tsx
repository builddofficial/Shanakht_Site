import type { Metadata } from "next";
import localFont from "next/font/local";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navigation/Navbar";
import Footer from "./(components)/Navigation/Footer";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const urbanist = localFont({
  src: "../public/fonts/Urbanist-VariableFont_wght.ttf",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Shanakht",
  description: "Shanakht",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} ${urbanist.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
