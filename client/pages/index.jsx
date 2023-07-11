import React, { useEffect } from "react";
import Logo from "../images/logo.png";
import Image from 'next/image';
import Background from "../images/background-home-initial.jpg";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import Footer from "../components/footer";
import Button from "../components/button";

import style from "../styles/pages/home.module.css";

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
            <div className={style['home-initial']}>
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
                        style={{ padding: '1rem 5rem', marginTop: '3rem' }}
                    />
                </section>
                <Image
                    src={Background}
                    className={style['background-home-initial']}
                    alt="Background página Home"
                />
            </div>
            <Footer />
        </>
    )
}
