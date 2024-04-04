import StreamVideoProvider from "@/providers/StremClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

type Props = {};

export const metadata: Metadata = {
    title: "YOOM",
    description: "video Calling app",
    icons: {
        icon: '/icons/logo.svg'
    }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
    <main>  
        <StreamVideoProvider>
           {children}
        </StreamVideoProvider>
    </main>);
};

export default RootLayout;
