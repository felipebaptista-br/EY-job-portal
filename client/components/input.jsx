import React from "react";

import css from "../styles/input.module.css";

export default function Input({
    id,
    placeholder,
    type,
    style
}) {

    return (
        <input
            id={id}
            className={css.input}
            style={style}
            type={type}
            placeholder={placeholder}
        />
    )
}
