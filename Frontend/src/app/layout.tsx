import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDoApp",
  description:
    "Never miss a beat!  ToDoApp helps you manage your tasks: create, mark complete, and keep track of everything. Stay organized and boost your productivity with this simple and intuitive app.",
  creator: "Jonnes Bezerra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
