import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      url: "/m.svg",
    },
  ],
  title: "Michkoff | Links",
  description: "All my links that you need",
  twitter: {
    site: "@ParzivalEugene",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Michkoff | Links",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://links.michkoff.com/",
    title: "Michkoff | Links",
    description: "All my links that you need",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Michkoff | Links",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
