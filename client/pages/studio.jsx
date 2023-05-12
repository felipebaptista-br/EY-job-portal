import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Header from "../components/header";
import Input from "../components/input";
import TextArea from "../components/textarea";
import Button from "../components/button";

import style from "../styles/studio.module.css";

export default function Studio() {
    const navigate = useRouter();
    const [data, setData] = useState({
        title: null,
        descriptionCompany: null,
        descriptionJob: null
    });

    // global state data
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.active && user.business) {

        } else {
            navigate.push('/');
        }
    }, []);

    const handleSubmitJob = () => {
        // handleSubmitJob
    }

    return (
        <>
            {
                user.active && user.business ?
                    <>
                        <Header panel={false} />
                        <div className={style.container}>
                            <h1>Abrir uma nova <span className={style.color}>Oportunidade!</span></h1>
                            <Input
                                id="title"
                                style={{ width: "480px" }}
                                placeholder="Título da Vaga"
                            />
                            <TextArea
                                id="description_company"
                                placeholder="Escreva um pouco sobre a sua Empresa..."
                                rows={5}
                                cols={65}
                            />
                            <TextArea
                                id="description_job"
                                placeholder="Escreva um pouco sobre a Vaga que está sendo proposta..."
                                rows={5}
                                cols={65}
                            />
                            <Button
                                children="PUBLICAR"
                                style={{ padding: "1rem 5rem" }}
                                onClick={() => handleSubmitJob()}
                            />
                        </div>
                    </>
                    :
                    <></>
            }
        </>
    )
}
