import type { Metadata } from "next";
import { Inter, Cantarell } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

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
      
      <body className={inter.className}>
       
          <Nav/>
          
           <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
        {children}
        </body>
    </html>
  );
}
