import React, { useEffect } from "react";
import { FcApproval, FcOnlineSupport, FcComboChart, FcLike, FcTodoList } from "react-icons/fc";
import Logo from "../images/logo.png";
import Image from 'next/image';
import Background from "../images/background-home-initial.jpg";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import Footer from "../components/footer";
import Button from "../components/button";

import style from "../styles/home.module.css";

export default function Home() {
    const dispatch = useDispatch();

    // functions
    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
    }, []);

    return (
        <>
            <div className={`${style['page-container-primary']} ${style['home-initial']}`}>
                <section className={style['home-initial-contents']}>
                    <Image
                        src={Logo}
                        className={style.logo}
                        alt="Background página Home"
                    />
                    <article>
                        <h1 className={style['home-initial-title']}>A vaga ideal para você, na palma da sua mão.</h1>
                        <p className={style['home-initial-content']}>Somos uma plataforma inteligênte com mais de 250 vagas! Nosso objetivo é facilitar o processo de recrutamento e seleção fazendo um papel de ponte entre recrutadores e candidatos.</p>
                    </article>
                    <Button
                        children='ABRA SUA CONTA'
                        route='/login'
                        className={style['started-account']}
                    />
                </section>
                <Image
                    src={Background}
                    className={style['background-home-initial']}
                    alt="Background página Home"
                />
            </div>
            {/* <div className={`${style['page-container-secondary']} ${style['home-benefits']}`}>
                <section className={style['home-benefits-items']}>
                    <FcApproval size={65} />
                    <p>Aprovado pelos Colaboradores</p>
                </section>
                <section className={style['home-benefits-items']}>
                    <FcOnlineSupport size={65} />
                    <p>Suporte Fácil</p>
                </section>
                <section className={style['home-benefits-items']}>
                    <FcComboChart size={65} />
                    <p>Solução Escalável</p>
                </section>
                <section className={style['home-benefits-items']}>
                    <FcLike size={65} />
                    <p>Resiliência com Colaboradores</p>
                </section>
                <section className={style['home-benefits-items']}>
                    <FcTodoList size={65} />
                    <p>Plataforma Interativa</p>
                </section>
            </div> */}
            {/* <div className={`${style['page-container-primary']} ${style['home-about']}`}>

            </div> */}
            {/* <div className={`${style['page-container-secondary']} ${style['home-final']}`}>

            </div> */}
            <Footer />
        </>
    )
}
