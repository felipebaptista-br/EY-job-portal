import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../components/header";
import Button from "../components/button";

import style from "../styles/login.module.css";

export default function Login() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <>
            <Header />
            <div className={style.container}>
                <section className={style.loginContainer}>
                    <h1>Acessar conta</h1>
                    <article className={style.loginInputs}>
                        <input
                            type="text"
                            placeholder="E-mail"
                            style={{ marginBottom: "1rem" }}
                            value={mail}
                            onChange={e => setMail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </article>
                    <a href="/register">Ainda não possui um cadastro?</a>
                    <Button
                        children="Entrar"
                        route="/"
                        time={1500}
                        loading
                    />
                </section>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress
                    color="inherit"
                />
            </Backdrop>
        </>
    )
}
