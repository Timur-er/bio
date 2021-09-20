import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {authAction} from "../store/auth/actions";

const storageName = 'userData'

export const useAuth = () => {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const dispatch = useDispatch();

    const login = useCallback((userName, id, jwtToken) => {
        setToken(jwtToken)
        setUserId(id)
        setUserName(userName)

        dispatch(authAction(userName, jwtToken, id, !!jwtToken))
        localStorage.setItem(storageName, JSON.stringify({userName, userId: id, token: jwtToken}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setUserName(null)

        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.userName, data.userId, data.token)
        }
    }, [login])
    return { login, logout, token, userId }
}