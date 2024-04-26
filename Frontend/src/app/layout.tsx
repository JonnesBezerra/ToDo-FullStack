import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={workSans.className}>
      <body>{children}</body>
    </html>
  );
}
