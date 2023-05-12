import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux";
import { HiOutlineLogout as Logout } from "react-icons/hi";
import Image from "next/image";
import Logo from "../images/logo.png";
import Button from "./button";

import style from "../styles/header.module.css";

export default function Header({ panel }) {
    const navigate = useRouter();

    // global state data
    const user = useSelector(state => state.user);

    useEffect(() => {

    }, []);

    return (
        <header className={style.header}>
            <Image
                src={Logo}
                className={style.logo}
                onClick={() => navigate.push('/')}
                alt="Logo InfinitySolutions"
            />
            <section className={panel ? style.headerContent : style.hideContent}>
                <a href="/">Home</a>
                <a href="/#filters">Filtros</a>
                <a href="/#jobs">Vagas</a>
            </section>
            {
                user.active ?
                    <section className={panel ? style.headerUser : style.hideContent}>
                        <a
                            href={user.business ? '/business' : '/profile'}
                        >Olá {user.name}</a>
                        <Logout
                            size={35}
                            className={style['logout-icon']}
                        />
                    </section>
                    :
                    <section className={panel ? style.headerUser : style.hideContent}>
                        <a onClick={() => navigate.push('/login')}>Log in</a>
                        <Button
                            children='Registrar'
                            route='/register'
                        />
                    </section>
            }
        </header>
    )
}
