import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header";

const roboto = Roboto({
  subsets: ["vietnamese"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"], // Full range of weights
  style: ["normal", "italic"], // Normal and italic styles
});

export const metadata: Metadata = {
  title: "NextJS",
  description: "Practice NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
