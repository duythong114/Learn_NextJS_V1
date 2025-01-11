import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
