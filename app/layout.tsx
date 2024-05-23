import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import Header from "@/components/header";
import data from "@/data.json"
  ;

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Zilog",
  description: "This is My Frist Website using SEO",
  icons: {
    icon: "/vercel.svg"
  },
  keywords: data.data,
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
      {/* <meta name="google-site-verification" content="zjK6Hxhrx6PtXe4xZsokA0VHOV6zsNiBnQ45jAKwot8" /> */}
      <body >
        <Header />
        {children}</body>
    </html>
    // </StoreProvider>
  );
}
