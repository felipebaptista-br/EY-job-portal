import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../utils/reducers/users";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SideHeader from "../../components/sideHeader";
import Button from "../../components/button";
import Swal from "sweetalert2";

import style from "../../styles/pages/profile.module.css";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Profile() {
    // declaration of variables
    const [dataUser, setDataUser] = useState({});
    const [disabled, setDisabled] = useState(true);
    const [passwordPage, setPasswordPage] = useState(false);
    const [open, setOpen] = React.useState(false);
    const navigate = useRouter();
    const dispatch = useDispatch();

    // create theme - Material UI
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

    // global state data
    const user = useSelector(state => state.user);

    // functions
    const handleNewPassword = async () => {
        const password = document.getElementById('password').value
        const passwordConfirm = document.getElementById('password_repeat').value
        if (password !== passwordConfirm) {
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 1800);
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Senha alterada com sucesso!',
                showConfirmButton: false,
                timer: 1500
            })
            setPasswordPage(false);
        }
    }

    const handleDeleteAccount = async () => {
        Swal.fire({
            title: 'Digite a senha:',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Excluir',
            confirmButtonColor: '#980000',
            showLoaderOnConfirm: true,
            preConfirm: (password) => {
                let result = false
                if (password === user.senha) {
                    result = true
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Conta apagada com Sucesso!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.showValidationMessage(`SENHA INCORRETA`)
                    result = false
                }
                return result
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }

    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
        if (!data.active || data.cnpj) {
            navigate.push('/login')
        }
    }, []);

    return (
        <>
            {
                user && user.active && user.cpf ?
                    <main style={{ display: 'flex' }}>
                        <ThemeProvider theme={theme}>
                            <SideHeader menuData='profile' />
                            <div className={style['container-profile']}>
                                <div className={passwordPage ? style.hide : ''}>
                                    <div className={style['panel-profile']}>
                                        <h3>Olá, <span className={style.color}>{user.nome}</span>!</h3>
                                        {disabled ?
                                            <BiEditAlt
                                                size={25}
                                                className={style['edit-icon']}
                                                onClick={() => setDisabled(!disabled)}
                                            />
                                            : <></>
                                        }
                                    </div>
                                    <section className={style['content-profile']}>
                                        <TextField
                                            style={{ width: '35%' }}
                                            label={user.nome}
                                            variant="standard"
                                            disabled={disabled ? true : false}
                                            onChange={e => setDataUser({ ...dataUser, nome: e.target.value })}
                                        />

                                        <TextField
                                            style={{ width: '35%' }}
                                            label={user.email}
                                            variant="standard"
                                            disabled={disabled ? true : false}
                                            onChange={e => setDataUser({ ...dataUser, email: e.target.value })}
                                        />

                                        <TextField
                                            style={{ width: '35%' }}
                                            label={user.cpf}
                                            variant="standard"
                                            disabled={disabled ? true : false}
                                            onChange={e => setDataUser({ ...dataUser, cpf: e.target.value })}
                                        />

                                        <TextField
                                            style={{ width: '35%' }}
                                            label={user.genero}
                                            variant="standard"
                                            disabled={disabled ? true : false}
                                            onChange={e => setDataUser({ ...dataUser, genero: e.target.value })}
                                        />

                                        <TextField
                                            style={{ width: '35%' }}
                                            label={user.raca}
                                            variant="standard"
                                            disabled={disabled ? true : false}
                                            onChange={e => setDataUser({ ...dataUser, raca: e.target.value })}
                                        />

                                        <article className={style['container-cv']}>
                                            <label htmlFor="cv">Currículo anexado:</label>
                                            <input
                                                type="file"
                                                name="cv"
                                                id="cv"
                                                className={
                                                    disabled ?
                                                        `${style['input-cv']} ${style['input-cv-disabled']}`
                                                        :
                                                        `${style['input-cv']} ${style['input-cv-active']}`
                                                }
                                                disabled={disabled ? true : false}
                                            />
                                        </article>
                                    </section>
                                    {!disabled ?
                                        <Button
                                            children="ATUALIZAR"
                                            className={style['button-update']}
                                            onClick={() => setDisabled(!disabled)}
                                        /> : <></>
                                    }
                                </div>
                                <div className={passwordPage ? style['password-profile'] : style.hide}>
                                    <h2>Alterar senha:</h2>
                                    <TextField
                                        id="password"
                                        type="password"
                                        style={{ width: '35%' }}
                                        label="Nova Senha"
                                        variant="filled"
                                    />

                                    <TextField
                                        id="password_repeat"
                                        type="password"
                                        style={{ width: '35%' }}
                                        label="Repetir Senha"
                                        variant="filled"
                                    />

                                    <Button
                                        children="ALTERAR SENHA"
                                        className={style['button-new-password']}
                                        onClick={() => handleNewPassword()}
                                    />
                                </div>
                                <section className={passwordPage ? style['hide'] : style['profile-buttons']}>
                                    <Button
                                        children="ALTERAR SENHA"
                                        className={style['button-password']}
                                        onClick={() => setPasswordPage(true)}
                                    />
                                    <Button
                                        children="EXCLUIR CONTA"
                                        className={style['button-delete']}
                                        onClick={() => handleDeleteAccount()}
                                    />
                                </section>
                            </div>
                        </ThemeProvider>
                        <Snackbar open={open} autoHideDuration={6000} >
                            <Alert severity="error" sx={{ width: '100%' }}>
                                A confirmação da senha deu errado...
                                <br />
                                Tente novamente!
                            </Alert>
                        </Snackbar>
                    </main>
                    :
                    <></>
            }
        </>
    )
}
