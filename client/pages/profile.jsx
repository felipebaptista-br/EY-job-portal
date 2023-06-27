import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import SideHeader from "../components/sideHeader";
import Card from "../components/cardJob";
import Button from "../components/button";

import style from "../styles/pages/profile.module.css";

export default function Profile() {
    // declaration of variables
    const navigate = useRouter();
    const dispatch = useDispatch();

    // global state data
    const user = useSelector(state => state.user);

    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
        if (!data.active) {
            navigate.push('/')
        }
    }, []);

    return (
        <>
            {
                user && user.active ?
                    <main style={{ display: 'flex' }}>
                        <SideHeader menuData='profile' />
                        <div className={style['container-profile']}>
                            <h1>Olá, <span className={style.color}>{user.nome}</span>!</h1>
                            <section>

                            </section>
                            <section className={style['profile-buttons']}>
                                <Button
                                    children="EXCLUIR CONTA"
                                    style={{ backgroundColor: '#980000', padding: '0.8rem 2.5rem' }}
                                />
                            </section>
                        </div>
                    </main>
                    :
                    <>
                    </>
            }
        </>
    )
}
