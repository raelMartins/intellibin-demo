import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/utils";
import { Toaster } from "~/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Intellibin",
  description: "Welcome to Intellibin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontInter.variable,
          )}
        >
                <Toaster />
                {children}
        </body>
      </html>
  );
}
