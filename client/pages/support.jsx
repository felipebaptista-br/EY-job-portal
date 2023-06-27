import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "../utils/reducers/users";
import SideHeader from "../components/sideHeader";

export default function Support() {
    const navigate = useRouter();
    const dispatch = useDispatch();

    // global state data
    const user = useSelector(state => state.user);

    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
        if (!data.active) {
            navigate.push('/')
        }
    }, []);

    return (
        <>
            {
                user && user.active ?
                    <main>
                        <SideHeader menuData='support' />
                    </main>
                    :
                    <></>
            }
        </>
    )
}
