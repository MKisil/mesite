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
