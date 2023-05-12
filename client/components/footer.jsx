import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";

import style from "../styles/footer.module.css";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Image src={Logo} />
        </footer>
    )
}
