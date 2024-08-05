import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarDemo from "@/myComponents/navbars/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Components",
  description:
    "A collection of components for a hotel website ,Completly independent and can be used in any project. Hotel website can be created by using array of these components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarDemo />
        {children}
      </body>
    </html>
  );
}
