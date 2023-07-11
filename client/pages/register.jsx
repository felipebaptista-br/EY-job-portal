import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Input } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "../components/button";
import Swal from "sweetalert2";

import style from "../styles/pages/register.module.css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Register() {
    const navigate = useRouter();
    const [value, setValue] = useState(0);

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const verifyFields = () => {
        let responseText = '';
        let verify = true
        return verify
    }

    const createAccount = () => {
        const verify = verifyFields();

        if (!verify) {
            Swal.fire({
                icon: 'error',
                title: 'Não foi possível criar a sua conta...',
                text: '',
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Conta criada com Sucesso!',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                navigate.push('/candidate/dashboard');
            }, 1500);
        }
    }

    return (
        <main>
            <ThemeProvider theme={theme}>
                <div className={style.container}>
                    <h1>Criar uma  <span className={style.color}>InfinityAccount</span></h1>
                    <Box className={style['container-center']}>
                        <Box>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab
                                    label="CANDIDATO"
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    label="EMPRESA"
                                    {...a11yProps(1)}
                                />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <section className={style['tab-container']}>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Nome Completo"
                                    style={{ width: "80%" }}
                                />
                                <Input
                                    id="cpf"
                                    type="text"
                                    placeholder="CPF"
                                    style={{ width: "80%" }}
                                />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="E-mail"
                                    style={{ width: "80%" }}
                                />
                                <Input
                                    id="password_1"
                                    type="password"
                                    placeholder="Crie uma senha"
                                    style={{ width: "80%" }}
                                />
                                <Input
                                    id="password_2"
                                    type="password"
                                    placeholder="Confirmar senha"
                                    style={{ width: "80%" }}
                                />
                                <article className={style.button}>
                                    <Button
                                        children="CRIAR"
                                        sucess
                                        returned="Conta criada com Sucesso!"
                                        time={1500}
                                        route="/profile"
                                    />
                                </article>
                            </section>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <section className={style['tab-container']}>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Nome Fantasia"
                                    style={{ width: "80%" }}
                                />
                                <Input
                                    id="cnpj"
                                    type="text"
                                    placeholder="CNPJ"
                                    style={{ width: "80%" }}
                                />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="E-mail para contato"
                                    style={{ width: "80%" }}
                                />
                                <Input
                                    id="password_1"
                                    type="password"
                                    placeholder="Crie uma senha"
                                    style={{ width: "80%" }}
                                />
                                <Input
                                    id="password_2"
                                    type="password"
                                    placeholder="Confirmar senha"
                                    style={{ width: "80%" }}
                                />
                                <article className={style.button}>
                                    <Button
                                        children="CRIAR"
                                        sucess
                                        returned="Conta criada com Sucesso!"
                                        time={1500}
                                        route="/candidate/dashboard"
                                    />
                                </article>
                            </section>
                        </TabPanel>
                    </Box>
                </div>
            </ThemeProvider>
        </main>
    )
}
