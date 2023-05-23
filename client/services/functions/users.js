import { useState } from "react";
import api from "../apis/api";

export async function getUsers() {
    // declaration of variables
    const [users, setUsers] = useState();

    // calling the api
    api.get('/get-users').then((response) => {
        setUsers(response);
    }).catch(function (error) {
        console.log(error);
    });

    // return data or error
    return users;
}

export async function getUser(id) {
    // declaration of variables
    const [user, setUser] = useState();

    // calling the api
    api.get(`/get-user/${id}`).then((response) => {
        setUser(response);
    }).catch(function (error) {
        console.log(error);
    });

    // return data or error
    return user;
}

export async function createUser(user) {
    // declaration of variables
    const [err, setErr] = useState(false);

    // calling the api
    api.post('/create-user/', user).then((response) => {
        console.log(response);
    }).catch(function (error) {
        setErr(true);
        console.log(error);
    });

    // return error status
    return err;
}

export async function updateUser(id, user) {
    // declaration of variables
    const [err, setErr] = useState(false);

    // calling the api
    api.put(`/update-user/${id}`, user).then((response) => {
        console.log(response);
    }).catch(function (error) {
        setErr(true);
        console.log(error);
    });

    // return error status
    return err
}
