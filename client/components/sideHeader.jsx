import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../utils/reducers/users";
import { HiOutlineLogout as LogoutIcon } from "react-icons/hi";
import Image from "next/image"
import Logo from "../images/logo-white.png";
import Swal from "sweetalert2";

import style from "../styles/components/sideHeader.module.css";

export default function SideHeader({ menuData }) {
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
        <header className={style['side-header']}>
            <Image
                src={Logo}
                className={style.logo}
                alt="Logo InfinitySolutions"
            />
            <div className={style['header-options']}>
                <a
                    onClick={() => navigate.push('/dashboard')}
                    className={menuData === 'dashboard' ? style['header-options-active'] : null}
                >
                    PROCURAS VAGAS
                </a>
                <a
                    onClick={() => navigate.push('/myjobs')}
                    className={menuData === 'myjobs' ? style['header-options-active'] : null}
                >
                    MINHAS VAGAS
                </a>
                <a
                    onClick={() => navigate.push('/profile')}
                    className={menuData === 'profile' ? style['header-options-active'] : null}>
                    MEU PERFIL
                </a>
                <a
                    onClick={() => navigate.push('/support')}
                    className={menuData === 'support' ? style['header-options-active'] : null}
                >
                    SUPORTE
                </a>
            </div>
            <LogoutIcon
                onClick={() => handleLogout()}
                size={50}
                className={style['logout-icon']}
            />
        </header>
    )
}
