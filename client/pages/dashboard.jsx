import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import SideHeader from "../components/sideHeader";
import CardFilter from "../components/cardFilter"
import CardJob from "../components/cardJob";
import Button from "../components/button";

import style from "../styles/pages/dashboard.module.css";

import { useRouter } from "next/navigation";

export default function Dashboard() {
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
        },
        {
            id: 7,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 8,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 9,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 10,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 11,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 12,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 13,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 14,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        },
        {
            id: 15,
            title: 'Senior UI Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            company: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
        }
    ];

    const filters = [
        {
            label: 'Marketing & Communication',
            qnt: 5,
        },
        {
            label: 'Design & Development',
            qnt: 45,
        },
        {
            label: 'Human Research & Development',
            qnt: 27,
        },
        {
            label: 'Finance Management',
            qnt: 10,
        },
        {
            label: 'Government Jobs',
            qnt: 23,
        },
        {
            label: 'Business & Consulting',
            qnt: 43,
        },
        {
            label: 'Customer Support Care',
            qnt: 7,
        },
        {
            label: 'Project Management',
            qnt: 27,
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
        <>{user && user.active && user.cpf ?
            <main style={{ display: 'flex' }}>
                <SideHeader
                    userType='candidate'
                    menuData='dashboard'
                />
                <div className={style.container}>
                    <section>
                        <article className={style['container-search']}>
                            <Image
                                src={Logo}
                                className={style.logo}
                                alt="Logo da Infinity Company"
                            />
                            <div className={style['dashboard-search']}>
                                <input type="text" placeholder="Pesquise uma oportunidade..." />
                                <Button children='Pesquisar' style={{ padding: "0.7rem 2rem" }} />
                            </div>
                        </article>
                        <div className={style['container-filters']}>
                            <h3>Use os <span className={style.color}>filtros</span> para encontrar a sua <span className={style.color}>vaga</span>!</h3>
                            <div className={style['content-filters']}>
                                {filters.map((filter) => (
                                    <CardFilter
                                        filter={filter}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={style['container-jobs']}>
                            <h3><span className={style.color}>Oportunidades</span> Encontradas:</h3>
                            <div className={style['content-jobs']}>
                                {jobs.map((job) =>
                                (<CardJob
                                    job={job}
                                />)
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </main> : <></>
        }</>
    )
}
