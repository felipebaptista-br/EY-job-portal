import React from "react";
import { SlUser } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import Button from "../components/button";

import style from "../styles/profilePanel.module.css";

export default function ProfilePanel({ user }) {

    return (
        <main className={style.container}>
            <SlUser size={80} style={{ cursor: "pointer" }} />
            <section className={style.content}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>NENHUM CURRÍCULO ANEXADO</p>
            </section>
        </main>
    )
}
