import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MySidebar from "@/myComponents/navbars/sidebar";
import { cn } from "@/lib/utils";

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
        <div
          className={cn(
            "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-[100vh]"
          )}
        >
          <MySidebar />
          <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
