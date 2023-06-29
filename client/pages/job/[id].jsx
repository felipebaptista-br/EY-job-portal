import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../utils/reducers/users";
import { usePathname, useRouter } from "next/navigation";
import SideHeader from "../../components/sideHeader";
import Button from "../../components/button";

import style from "../../styles/pages/job.module.css";

export default function Job({ job }) {
    const navigate = useRouter();
    const dispatch = useDispatch();

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

    // global state data
    const user = useSelector(state => state.user);

    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
        if (!data.active) {
            navigate.push('/login')
        }
    }, []);

    return (
        <>
            {
                user && user.active ?
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
                    :
                    <>
                    </>
            }
        </>
    )
}
