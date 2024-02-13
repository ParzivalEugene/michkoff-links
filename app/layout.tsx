"use client";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>Michkoff | Links</title>
      <meta name="title" content="Michkoff | Links" />
      <meta name="description" content="All my links that you need" />
      <link rel="icon" sizes="256x256" href="/e_logo.svg" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://links.michkoff.com/" />
      <meta property="og:title" content="Michkoff | Links" />
      <meta property="og:description" content="All my links that you need" />
      <meta property="og:image" content="/preview.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://links.michkoff.com/" />
      <meta property="twitter:title" content="Michkoff | Links" />
      <meta
        property="twitter:description"
        content="All my links that you need"
      />
      <meta property="twitter:image" content="/preview.png" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
