import Footer from "@/components/footer/footer";
import LenisScrollWrapper from "@/components/LenisScrollWrapper";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import WhatsappButton from "./services2/_components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ak Contractor Services PTE LTD.",
  description: "A contractor agency in singapore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins ${poppins.variable}`}
      >
        <LenisScrollWrapper>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
          <WhatsappButton />
        </LenisScrollWrapper>
      </body>
    </html>
  );
}
