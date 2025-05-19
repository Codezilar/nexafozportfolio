import type { Metadata } from "next";
import { Geist } from 'next/font/google'

import "./globals.css";
import Footer from "@/components/Footer";

const roboto = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NexaFOZ",
  description: "Building and Scaling Of Digital Businesses",
};

import {
  ClerkProvider,

} from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/nex.png" sizes="any" />
        </head>
        <body className={`${roboto.className}`}> 
            {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
