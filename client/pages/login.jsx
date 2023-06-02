import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../components/header";
import Button from "../components/button";
import Swal from "sweetalert2";

import style from "../styles/login.module.css";

export default function Login() {
    // declaration of functions
    const dispatch = useDispatch();
    const navigate = useRouter();

    // declaration of variables
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    // declaration of global variables
    const user = useSelector(state => state.user);

    // functions
    const handleLogin = () => {
        setOpen(true);
        dispatch(
            setUser({
                active: true,
                cpf: "51451074808",
                nome: "Felipe Baptista",
                email: "felipe.baptista06@gmail.com",
                senha: "xptoxpto123123",
                genero: "Masculino",
                raca: "Branco",
                id_curso: 1
            })
        );
        setTimeout(() => {
            navigate.push('/');
        }, 1500);
    }

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
                    <a
                        onClick={() => navigate.push('/register')}
                    >
                        Ainda não possui um cadastro?
                    </a>
                    <Button
                        children="Entrar"
                        onClick={() => handleLogin()}
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
