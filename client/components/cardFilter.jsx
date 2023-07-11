import React, { useState } from "react";

import style from "../styles/components/cardFilter.module.css";

export default function cardFilter({ filter }) {
    const [active, setActive] = useState(false);

    const handleActivated = () => {
        setActive(!active);
    }

    return (
        <main
            onClick={() => handleActivated()}
            className={active ? style['card-filter-active'] : style['card-filter']}
        >
            <h5>{filter.label}</h5>
            <p>{filter.qnt} vagas</p>
        </main>
    )
}
