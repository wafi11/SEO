import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import Header from "@/components/header";
;

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
