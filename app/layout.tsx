import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const JetBrainsMono = JetBrains_Mono(
  { subsets: ["latin"],
    weight: ["200", "300", "400", "500","600","700","800"],
    variable: "--font-jetbrainsMono"
  },
);

export const metadata: Metadata = {
  title: "Hamad Portfolio",
  description: "Full stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header/>  
        {children}
        </body>
    </html>
  );
}
