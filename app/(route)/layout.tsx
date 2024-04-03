import React, { ReactNode } from "react";

type Props = {};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
    <main>  
    {children}
    Footer
    </main>);
};

export default RootLayout;
