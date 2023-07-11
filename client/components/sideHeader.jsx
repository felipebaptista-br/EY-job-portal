import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../utils/reducers/users";
import { HiOutlineLogout as LogoutIcon } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import Swal from "sweetalert2";

import style from "../styles/components/sideHeader.module.css";

export default function SideHeader({ menuData }) {
    //declaration of variables
    const navigate = useRouter();
    const [hide, setHide] = useState(false);

    // global state data
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleLogout = () => {
        Swal.fire({
            title: 'Tem certeza que deseja sair da sua conta?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4540DB',
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
        <header className={!hide ? style['side-header'] : style['side-header-hide']}>
            <div className={!hide ? style['header-options'] : style.hide}>
                <a
                    onClick={() => navigate.push('/candidate/dashboard')}
                    className={menuData === 'dashboard' ? style['header-options-active'] : null}
                >
                    PROCURAS VAGAS
                </a>
                <a
                    onClick={() => navigate.push('/candidate/myjobs')}
                    className={menuData === 'myjobs' ? style['header-options-active'] : null}
                >
                    MINHAS VAGAS
                </a>
                <a
                    onClick={() => navigate.push('/support')}
                    className={menuData === 'support' ? style['header-options-active'] : null}
                >
                    SUPORTE
                </a>
                <a
                    onClick={() => navigate.push('/candidate/profile')}
                    className={menuData === 'profile' ? style['header-options-active'] : null}>
                    MEU PERFIL
                </a>
            </div>
            <LogoutIcon
                onClick={() => handleLogout()}
                size={30}
                className={style['logout-icon']}
            />
        </header>
    )
}
