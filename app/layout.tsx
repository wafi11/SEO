import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { Provider } from "react-redux";
import { StoreProvider } from "./lib/StoreProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "gatau",
  description: "gatau ahh bingung",
  icons: {
    icon: "/vercel.svg"
  },
  keywords: ["macan tutul", "macan", "harimau", "harimau sumatra", "macan sumatara", "macan", "harimau sumatra"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <StoreProvider>
    <html lang="en">
      <body >
        <Header />
        {children}</body>
    </html>
    // </StoreProvider>
  );
}
