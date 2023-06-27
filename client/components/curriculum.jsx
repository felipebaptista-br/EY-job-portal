import React from "react";
import { AiOutlineUpload } from "react-icons/ai";
import Image from "next/image";
import Background from "../images/diversidade.jpg";

import style from "../styles/components/curriculum.module.css";

export default function Curriculum() {
    return (
        <main className={style.curriculum}>
            <Image src={Background} className={style.background} />
            <div className={style.curriculumContent}>
                <h1>Gostaria de facilitar o processo? Anexe aqui o seu Currículo.</h1>
                <p>A Plataforma aceita apenas documentos com a extensão PDF, caso o seu documento esteja em outra extensão, utilize um conversor.</p>
                <label class={style.fileUpload}>
                    <input type="file" />
                    <AiOutlineUpload size={25} />
                    <p>Upload CV</p>
                </label>
            </div>
        </main>
    )
}

