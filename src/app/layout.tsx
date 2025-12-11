import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QRCraft - Free QR Code Generator",
  description: "Generate QR codes instantly for free. Create QR codes for URLs, text, and more. No signup required.",
  keywords: "QR code, QR generator, free QR code, QR code maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}