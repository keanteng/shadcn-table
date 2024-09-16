import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Viewport } from "next";

export const metadata: Metadata = {
  title: "ECOMMERCE",
  description: "An E-Commerce Solution Site",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <div className="bg-[var(--background)] text-[var(--foreground)]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
