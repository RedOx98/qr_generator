import type { Metadata } from "next";
import { Inter, Cantarell } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });
// const cantarell = Cantarell();
const login: boolean = true;

export const metadata: Metadata = {
  title: "Ecobank VCC",
  description: "Virtual Complimentary card Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
      <link href={cantarell} rel="stylesheet" />
      </head> */}
      <body className={inter.className}>
        {login?
          <Nav/>
          :
           null
          }
        {children}
        </body>
    </html>
  );
}
