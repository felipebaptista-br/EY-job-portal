import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Header from "../components/header";
import Table from "../components/tableBusiness";
import Footer from "../components/footer"

import style from "../styles/business.module.css";

export default function Business() {
    const navigate = useRouter();

    // global state data
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.active && user.cnpj) {

        } else {
            navigate.push('/');
        }
    }, []);

    return (
        <>
            {
                user.active && user.cnpj ?
                    <>
                        <Header panel={false} />
                        <div className={style.businessPanel}>
                            <h1>Temos as melhores <span className={style.primary}>Soluções</span> para o seu <span className={style.primary}>Negócio!</span></h1>
                        </div>
                        <div className={style.business}>
                            <section className={style.businessJobs}>
                                <h2>VAGAS PUBLICADAS</h2>
                                <button onClick={() => navigate.push('/studio')}>
                                    PUBLICAR VAGA
                                </button>
                            </section>
                            <section>
                                <h1 style={{ marginTop: '3rem' }}>
                                    Nenhuma vaga foi publicada até o momento!
                                </h1>
                            </section>
                            {/* <Table /> */}
                        </div>
                        {/* <Footer /> */}
                    </>
                    :
                    <></>
            }
        </>
    )
}
