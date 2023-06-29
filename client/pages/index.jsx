import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/reducers/users";
import Header from "../components/header";
import Button from "../components/button";
import CardFilter from "../components/cardFilter";
import CardJob from "../components/cardJob";
import Curriculum from "../components/curriculum";
import Footer from "../components/footer";

import style from "../styles/pages/home.module.css";

export default function Home() {
    const dispatch = useDispatch();

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
        }
    ];


    // functions
    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
    }, []);

    return (
        <main>
            <Header panel />
            <main>
                <div className={style['home-hello']}>
                    <section className={style['home-hello-title']}>
                        <h1>Conheça a <span className={style.color}>vaga ideal</span> para você!</h1>
                    </section>
                    <p>Mais de 250 vagas disponíveis!</p>
                    <div className={style['home-search']}>
                        <input type="text" placeholder="Pesquise uma oportunidade..." />
                        <Button children='Pesquisar' style={{ padding: "0.7rem 2rem" }} />
                    </div>
                </div>
                <div id="filters" className={style['home-filter']}>
                    <h2>Use os <span className={style.color}>filtros</span> para encontrar as vagas de seu interesse:</h2>
                    <section className={style['content-filters']}>
                        {filters.map((filter) =>
                        (<CardFilter
                            filter={filter}
                        />)
                        )}
                    </section>
                </div>
                <div id="jobs" className={style['home-jobs']}>
                    <h2>Vagas encontradas:</h2>
                    <section className={style['content-jobs']}>
                        {jobs.map((job) =>
                        (<CardJob
                            job={job}
                        />)
                        )}
                    </section>
                </div>
                <Footer />
            </main>
        </main>
    )
}
