import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
const myFont = localFont({ src: "../assets/fonts/Poppins-Regular.ttf" });


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
      <body className={myFont.className}>
        <Nav />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
