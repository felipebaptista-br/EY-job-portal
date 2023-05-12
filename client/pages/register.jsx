import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from "../components/input";
import Button from "../components/button";
import Swal from "sweetalert2";

import style from "../styles/register.module.css";

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
    const [businessModel, setBusinessModel] = useState(false)
    const [value, setValue] = useState(0);

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
                businessModel ? navigate.push('/business') : navigate.push('/profile');
            }, 1500);
        }
    }

    return (
        <>
            <div className={style.container}>
                <h1>Criar uma  <span className={style.color}>InfinityAccount</span></h1>
                <Box className={style.containerCenter}>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab
                                label="CANDIDATO"
                                {...a11yProps(0)}
                                onClick={() => setBusinessModel(false)}
                            />
                            <Tab
                                label="EMPRESA"
                                {...a11yProps(1)}
                                onClick={() => setBusinessModel(true)}
                            />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <section className={style.tabContainer}>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Nome Completo"
                                style={{ width: "70%" }}
                            />
                            <Input
                                id="cpf"
                                type="text"
                                placeholder="CPF"
                                style={{ width: "70%" }}
                            />
                            <Input
                                id="email"
                                type="email"
                                placeholder="E-mail"
                                style={{ width: "70%" }}
                            />
                            <Input
                                id="password_1"
                                type="password"
                                placeholder="Crie uma senha"
                                style={{ width: "70%" }}
                            />
                            <Input
                                id="password_2"
                                type="password"
                                placeholder="Confirmar senha"
                                style={{ width: "70%" }}
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
                        <section className={style.tabContainer}>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Nome Fantasia"
                                style={{ width: "70%" }}
                            />
                            <Input
                                id="cnpj"
                                type="text"
                                placeholder="CNPJ"
                                style={{ width: "70%" }}
                            />
                            <Input
                                id="email"
                                type="email"
                                placeholder="E-mail para contato"
                                style={{ width: "70%" }}
                            />
                            <Input
                                id="password_1"
                                type="password"
                                placeholder="Crie uma senha"
                                style={{ width: "70%" }}
                            />
                            <Input
                                id="password_2"
                                type="password"
                                placeholder="Confirmar senha"
                                style={{ width: "70%" }}
                            />
                            <article className={style.button}>
                                <Button
                                    children="CRIAR"
                                    sucess
                                    returned="Conta criada com Sucesso!"
                                    time={1500}
                                    route="/business"
                                />
                            </article>
                        </section>
                    </TabPanel>
                </Box>
            </div>
        </>
    )
}
