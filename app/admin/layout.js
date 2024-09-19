"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { Inter } from "next/font/google";
import Sidebar from "../component/admin/adminsidebar"
import AdminNavbar from "../component/admin/adminnavbar"
import { NavbarProvider } from '../context/admin/NavbarContext';  // Import NavbarContext

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const pathname = usePathname();  // Get the current path
  // const pageName = pathname.split("/").pop();
  return (
    <html lang="en">
      <NavbarProvider>
      <body className={inter.className}>
        {/* Conditionally show Sidebar if pathname is not "/admin" */}
        {<><Sidebar />  <AdminNavbar /></>}
        {children}
      </body>
      </NavbarProvider>
    </html>
  );
}
