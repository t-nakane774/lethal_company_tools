import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopNavigator from "./(view)/_component/navigation/TopNavigator";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LCT",
  description: "Lethal Company Toolsへようこそ、世界記録を狙うあなたに捧げます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavigator />
        {children}
      </body>
    </html>
  );
}
