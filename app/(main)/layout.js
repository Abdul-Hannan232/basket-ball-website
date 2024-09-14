"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { Inter } from "next/font/google";
import Navbar from "../component/NavBarComponent"
import Footer from "../component/FooterComponent"
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const pathname = usePathname();  // Get the current path

    return (
      
            <div className={inter.className}>
                {/* Conditionally show Sidebar if pathname is not "/admin" */}
                <Navbar />
                {children}
                <Footer />

            </div>
    );
}
