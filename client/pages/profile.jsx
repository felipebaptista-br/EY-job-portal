import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Header from "../components/header";
import ProfilePanel from "../components/profilePanel";
import Card from "../components/cardJob";

import style from "../styles/profile.module.css";

export default function Profile() {
    const navigate = useRouter();
    const [jobs, setJobs] = useState();

    // global state data
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.active && !user.business) {
            setJobs([
                {
                    id: 1,
                    title: 'Senior UI Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    company: 'Microsoft',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
                },
                {
                    id: 2,
                    title: 'Senior UI Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    company: 'Microsoft',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
                },
                {
                    id: 3,
                    title: 'Senior UI Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    company: 'Microsoft',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
                },
                {
                    id: 4,
                    title: 'Senior UI Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    company: 'Microsoft',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
                }
            ]);
        } else {
            navigate.push('/');
        }
    }, []);

    return (
        <>
            {
                user.active && !user.business ?
                    <>
                        <Header panel />
                        <ProfilePanel user={user} />
                        <div className={style.panel}>
                            {
                                !jobs &&
                                <h1>Aqui ficarão as <span className={style.color}>vagas</span> que você se  <span className={style.color}>candidatou...</span></h1>
                            }
                            {
                                jobs &&
                                <section className={style.gridContent}>
                                    {jobs.map((job) =>
                                        <Card job={job} />
                                    )}
                                </section>
                            }
                        </div>
                    </>
                    :
                    <></>
            }
        </>
    )
}
