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
  verification: {
    google: "zjK6Hxhrx6PtXe4xZsokA0VHOV6zsNiBnQ45jAKwot8"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <StoreProvider>
    <html lang="en">
      <meta name="google-site-verification" content="zjK6Hxhrx6PtXe4xZsokA0VHOV6zsNiBnQ45jAKwot8" />
      <body >
        <Header />
        {children}</body>
    </html>
    // </StoreProvider>
  );
}
