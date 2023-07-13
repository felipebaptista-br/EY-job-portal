import React from "react";
import SideBar from "../../components/sidebar";

import style from "../../styles/myjobs-recruiter.module.css";

export default function MyJobs() {

    return (
        <>
            <main style={{ display: 'flex' }}>
                <SideBar menuData='myjobs' />
                <div className={style['container-myjobs']}>

                </div>
            </main>
        </>
    )
}
