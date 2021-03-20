import Link from "next/link";
import React from "react";
import _s from "./button.module.scss";

interface ButtonProps {
    refLink: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ refLink, children }) => {
    return (
        <Link href={refLink}>
            <a className={_s.btn}>{children}</a>
        </Link>
    );
};

export default Button;
