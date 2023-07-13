import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../utils/reducers/users";
import { useRouter } from "next/navigation";
import SideBar from "../../components/sidebar";
import CardJob from "../../components/cardJob";

import style from "../../styles/myjobs-candidate.module.css";

export default function MyJobs() {
    // declaration of variables
    const navigate = useRouter();
    const dispatch = useDispatch();

    const jobs = [
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
        },
        {
            id: 5,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 6,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        }
    ];

    // global state data
    const user = useSelector(state => state.user);

    // functions
    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
        if (!data.active || data.cnpj) {
            navigate.push('/login')
        }
    }, []);

    return (
        <>{
            user && user.active && user.cpf ?
                <main style={{ display: 'flex' }}>
                    <SideBar menuData='myjobs' />
                    <div className={style['container-myjobs']}>
                        <h3>Em <span className={style.color}>andamento</span>:</h3>
                        <section className={style['content-jobs']}>
                            {jobs.map((job) =>
                            (<CardJob
                                job={job}
                            />)
                            )}
                        </section>
                        <h3 style={{ marginTop: '3rem' }}>Finalizados:</h3>
                        <section className={style['content-jobs']}>
                            {jobs.map((job) =>
                            (<CardJob
                                job={job}
                            />)
                            )}
                        </section>
                    </div>
                </main>
                : <></>
        }</>
    )
}
