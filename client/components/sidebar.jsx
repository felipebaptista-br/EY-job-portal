import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../utils/reducers/users";
import { HiOutlineLogout as LogoutIcon } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import Swal from "sweetalert2";

import style from "../styles/sidebar.module.css";

export default function SideBar({ menuData }) {
    //declaration of variables
    const [userName, setUserName] = useState('');
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

    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        console.log(data);
        setUserName(data.nome);
        dispatch(
            setUser(data)
        );
    }, []);

    return (
        <header className={!hide ? style['side-bar'] : style['side-bar-hide']}>
            {
                !hide ?
                    <>
                        <IoChevronBack
                            onClick={() => setHide(!hide)}
                            size={45}
                            className={style['hide-icon']}
                        />
                    </>
                    :
                    <CgMenuLeftAlt
                        onClick={() => setHide(!hide)}
                        size={50}
                        className={style['hide-icon']}
                    />
            }
            {
                user.cpf ?
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
                            onClick={() => navigate.push('/profile')}
                            className={menuData === 'profile' ? style['header-options-active'] : null}>
                            MEU PERFIL
                        </a>
                    </div>
                    :
                    <div className={!hide ? style['header-options'] : style.hide}>
                        <a
                            onClick={() => navigate.push('/recruiter/studio')}
                            className={menuData === 'studio' ? style['header-options-active'] : null}
                        >
                            PUBLICAR VAGA
                        </a>
                        <a
                            onClick={() => navigate.push('/recruiter/myjobs')}
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
                            onClick={() => navigate.push('/profile')}
                            className={menuData === 'profile' ? style['header-options-active'] : null}>
                            MEU PERFIL
                        </a>
                    </div>
            }
            <LogoutIcon
                onClick={() => handleLogout()}
                size={30}
                className={style['logout-icon']}
            />
        </header>
    )
}
