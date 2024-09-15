"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { Inter } from "next/font/google";
import Sidebar from "../component/admin/adminsidebar"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();  // Get the current path

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Conditionally show Sidebar if pathname is not "/admin" */}
        {/* {pathname !== '/admin' && <Sidebar />} */}
        {children}
      </body>
    </html>
  );
}
