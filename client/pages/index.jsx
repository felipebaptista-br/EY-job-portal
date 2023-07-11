import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import Footer from "../components/footer";

import style from "../styles/pages/home.module.css";

export default function Home() {
    const dispatch = useDispatch();

    // functions
    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
    }, []);

    return (
        <>
            <main className={style['home-section']}>

            </main>
            <Footer />
        </>
    )
}
