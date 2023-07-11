import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Input } from "@mui/material";
import Button from "../components/button";

import style from "../styles/pages/login.module.css";

export default function Login() {
    // declaration of functions
    const dispatch = useDispatch();
    const navigate = useRouter();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#4540DB',
            },
            secondary: {
                main: '#292686',
            },
        },
        typography: {
            fontFamily: [
                'Roboto',
            ].join(','),
        },
    });

    // declaration of variables
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    // declaration of global variables
    const user = useSelector(state => state.user);

    // functions
    const handleLogin = () => {
        // setOpen(true);
        dispatch(
            setUser({
                active: true,
                cpf: "514.510.748-08",
                nome: "Felipe Baptista",
                email: "felipe.baptista06@gmail.com",
                senha: "@Senha12345",
                genero: "Masculino",
                raca: "Branca",
                id_curso: 50
            })
        );
        setTimeout(() => {
            console.log(user);
            if (user.cpf) {
                navigate.push('/candidate/dashboard');
            }
            if (user.cnpj) {
                navigate.push('/recruiter/dashboard');
            }
        }, 1500);
    }

    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        console.log(data);
    }, [])

    return (
        <main>
            <ThemeProvider theme={theme}>
                <div className={style.container}>
                    <section className={style['login-container']}>
                        <h1>Log In</h1>
                        <article className={style['login-inputs']}>
                            <Input
                                id="email"
                                type="mail"
                                placeholder="E-mail"
                                style={{ width: "100%" }}
                                value={mail}
                                onChange={e => setMail(e.target.value)}
                            />
                            <Input
                                id="password"
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
                        <div className={style['button-group']}>
                            <Button
                                children="Entrar"
                                style={{ width: '50%' }}
                                onClick={() => handleLogin()}
                            />
                        </div>
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
            </ThemeProvider>
        </main>
    )
}
