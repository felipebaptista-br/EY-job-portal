import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from "sweetalert2";

import css from "../styles/button.module.css";

export default function Button({
    children,
    style,
    onClick,
    route,
    time,
    sucess,
    loading,
    returned
}) {
    const navigate = useRouter();
    const [open, setOpen] = useState(false);

    const handleButton = async () => {
        if (sucess) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: returned,
                showConfirmButton: false,
                timer: time
            });
            setTimeout(() => {
                navigate.push(route);
            }, time);
        } else if (loading) {
            setOpen(true);
            setTimeout(() => {
                navigate.push(route);
            }, time);
        } else {
            route ? navigate.push(route) : ''
        }
    }

    return (
        <button
            className={css.button}
            style={style}
            onClick={onClick ? onClick : () => handleButton()}
        >
            {children}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </button>
    )
}