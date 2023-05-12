import React, { useState } from "react";

import style from "../styles/cardFilter.module.css";

export default function cardFilter({ filter }) {
    const [active, setActive] = useState(false);

    const handleActivated = () => {
        setActive(!active);
    }

    return (
        <main
            onClick={() => handleActivated()}
            className={active ? style.cardFilterActive : style.cardFilter}
        >
            <h4>{filter.label}</h4>
            <p>{filter.qnt} vagas</p>
        </main>
    )
}
