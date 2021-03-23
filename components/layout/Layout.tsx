import React from "react";
import Header from "./header/Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Header/>
            <main>{children}</main>
        </React.Fragment>
    );
};
export default Layout;
