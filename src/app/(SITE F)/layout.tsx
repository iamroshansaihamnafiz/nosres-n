import React from "react";
import '@/./app/globals.css';
import {ToastContainer} from "react-toastify";
import Header from "@/app/(SITE F)/Header";
import Footer from "@/app/(SITE F)/Footer";

export const metadata = {
    title: 'Nosres',
    description: 'SITE F',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        <ToastContainer
            bodyClassName="toastBody"
        />
        </body>
        </html>
    )
}
