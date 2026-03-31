import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/GeistVF.woff", weight: "100 900" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SignatureDigi — Digital Signatures Made Simple",
  description: "Create, send, and manage legally binding digital signatures with SignatureDigi. Fast, secure, and easy to use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#0a0a0f] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
