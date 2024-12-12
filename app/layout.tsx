import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import SignUpModal from "./components/modals/SignUpModal";
import { Sign } from "crypto";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AirDnD",
  description: "Airbnb clone created with Next.js and Django REST Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = <h1 className="text-3xl font-semibold">Modal</h1>;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-32 ">{children}</div>

        <LoginModal />
        <SignUpModal />

        {/* <Modal label="Title" content={content} isOpen={true}  /> */}
      </body>
    </html>
  );
}
