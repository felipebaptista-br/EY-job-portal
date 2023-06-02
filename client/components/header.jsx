import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import { HiOutlineLogout as LogoutIcon } from "react-icons/hi";
import { FaUserAlt as ProfileIcon } from "react-icons/fa";
import Image from "next/image";
import Logo from "../images/logo.png";
import Button from "./button";
import Swal from "sweetalert2";

import style from "../styles/header.module.css";

export default function Header({ panel }) {
    const navigate = useRouter();

    // global state data
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleLogout = () => {
        Swal.fire({
            title: 'Tem certeza que deseja sair da sua conta?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Não',
            confirmButtonText: 'Sim'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setUser({}));
                navigate.push('/');
            }
        });
    }

    return (
        <header className={style.header}>
            <Image
                src={Logo}
                className={style.logo}
                onClick={() => navigate.push('/')}
                alt="Logo InfinitySolutions"
            />
            <section className={panel ? style.headerContent : style.hideContent}>
                <a onClick={() => navigate.push('/')}>Home</a>
                <a onClick={() => navigate.push('/#filters')}>Filtros</a>
                <a onClick={() => navigate.push('/#jobs')}>Vagas</a>
            </section>
            {
                user.active ?
                    <section className={panel ? style.headerUser : style.hideContent}>
                        <a
                            onClick={() =>
                                user.cpf
                                    ? navigate.push('/profile')
                                    : navigate.push('/business')
                            }
                        >
                            Olá, {user.nome}
                            <ProfileIcon
                                size={22}
                                className={style['profile-icon']}
                            />
                        </a>
                        <LogoutIcon
                            onClick={() => handleLogout()}
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
