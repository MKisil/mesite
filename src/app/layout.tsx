import type { Metadata } from "next";
import "./globals.css";

import { geistSans } from "@/app/fonts";
import { ThemeProvider } from "@/components/themeProvider";

export const metadata: Metadata = {
  title: "Mikhailok",
  description: "Mikhailok - Full-Stack Web Developer",
  keywords: [
    "JavaScript",
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "Next.js",
    "React",
    "Vue",
  ],
  openGraph: {
    title: "Mikhailok",
    description: "Mikhailok - Full-Stack Web Developer",
    url: "https://mikhailok.me",
    siteName: "Mikhailok",
    images: [
      {
        url: "../../public/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Mikhailok - Full-Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikhailok",
    description: "Mikhailok - Full-Stack Web Developer",
    images: ["../../public/ogImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
