import {useCallback, useState} from "react";


// хук для работы с асинхронными запросами на сервер
export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // оборачиваем в хук useCallback что бы реакт не входил в рекурсию
    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {

            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Smth went wrong')
            }
            setLoading(false);
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    // по итогу возвращаем объкт с такими флагами
    return {loading, request, error}
}