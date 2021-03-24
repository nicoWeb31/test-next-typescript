import Link from "next/link";
import React from "react";
import style from "./header.style.module.scss";

const Header: React.FC = () => {

    

    return (
        <header  className={style.header}>
            <div className={style.logo}>
                <Link href='/'>
                <a>Next Event</a>
                </Link>
            </div>

            <nav className={style.navigation}>
                <ul>
                    <li>
                        <Link href="/events"> 
                        <a> All Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/product"> 
                        <a> Product</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
