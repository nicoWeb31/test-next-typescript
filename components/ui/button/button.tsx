import Link from "next/link";
import React from "react";
import _s from "./button.module.scss";

interface ButtonProps {
    refLink?: string;
    onclick?: ()=>{};
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ refLink, children, onclick }) => {

    if(refLink) {
        return (
            <Link href={refLink}>
                <a className={_s.btn}>{children}</a>
            </Link>
        );

    }

    return <button onClick={onclick} className={_s.btn}>{children}</button>;

};

export default Button;
