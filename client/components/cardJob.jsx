import React from "react";
import { useRouter } from "next/navigation";

import style from "../styles/components/cardJob.module.css";

export default function CardJob({ job }) {
    const navigate = useRouter();

    return (
        <main
            onClick={() => navigate.push(`/job/id=${job.id}`)}
            className={style['card-job']}>
            <section className={style['company-job']}>
                <img src={job.logo} alt="Logo" />
                <p>{job.company}</p>
            </section>
            <section className={style['content-job']}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
            </section>
        </main>
    )
}
