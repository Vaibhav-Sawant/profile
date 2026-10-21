import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Designer & Developer",
  description:
    "A little corner of the internet for my work, ideas, and the things I'm building.",
  openGraph: {
    title: "Your Name — Designer & Developer",
    description:
      "A little corner of the internet for my work, ideas, and the things I'm building.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
