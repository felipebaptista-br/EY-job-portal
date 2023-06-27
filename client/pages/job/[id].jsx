import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SideHeader from "../../components/sideHeader";
import Button from "../../components/button";

import style from "../../styles/pages/job.module.css";

export default function Job({ job }) {
    const [id, setId] = useState();

    // const searchParams = usePathname();

    // const searchId = async () => {
    //     const id = searchParams.toString().replace('/job/id=', '');
    //     return id
    // }

    // useEffect(() => {
    //     const handleId = async () => {
    //         const search = await searchId();
    //         setId(search)
    //         console.log(search);
    //     }
    //     handleId();
    // }, []);

    return (
        <main className={style['job-container']}>
            <SideHeader menuData='dashboard' />
            <div className={style.job}>
                <section className={style.panel}>
                    <h1 className={style.color}>Senior UI Designer</h1>
                </section>
                <section className={style.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <br />
                    <p><span className={style.color}>Status do processo</span>: Não Iniciado</p>
                </section>
                <Button
                    children='CANDIDATAR-SE'
                    route='/dashboard'
                    sucess
                    returned='Candidatado(a) com Sucesso!'
                    time={1500}
                    style={{ padding: "1rem 3rem" }}
                />
            </div>
        </main>
    )
}
