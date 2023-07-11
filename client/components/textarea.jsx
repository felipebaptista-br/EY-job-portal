import React from "react";

import css from "../styles/textarea.module.css";

export default function TextArea({
    id,
    name,
    cols,
    rows,
    placeholder,
    style
}) {

    return (
        <textarea
            className={css.textarea}
            style={style}
            name={name}
            id={id}
            cols={cols}
            rows={rows}
            placeholder={placeholder}
        />
    )
}

