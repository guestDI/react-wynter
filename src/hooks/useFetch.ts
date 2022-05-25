import { useEffect, useRef, useState } from "react";

export const useFetch = (url: string) => {
    const cache = useRef<Record<string, any>>({});

    // Possible to change it to useReducer
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState([])
    const [httpError, setHttpError] = useState() 

    useEffect(() => {
        const fetchData = async () => {
            if (cache.current[url]) {
                const data = cache.current[url]
                setData(data)
                setStatus('fetched')
            } else {
                setStatus('fetching');
                const response = await fetch(url)
    
                if(!response.ok){
                    throw new Error("Products can't be loaded. Please try later")
                }
    
                const data = await response.json()
                cache.current[url] = data
    
                setData(data)
    
                setStatus('fetched')
            }
        };

        fetchData().catch(error => {
            setHttpError(error.message)
        })
    }, [url, cache]);

    return { status, httpError, data };
};
