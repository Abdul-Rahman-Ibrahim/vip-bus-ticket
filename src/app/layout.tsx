import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "./Loading";
import AuthProvider from "@/contexts/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loading>
          <AuthProvider>{children}</AuthProvider>
        </Loading>
      </body>
    </html>
  );
}
