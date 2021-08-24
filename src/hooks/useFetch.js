import { useEffect, useRef, useState } from 'react';


export const useFetch = (url, body = null, method = 'get') => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                }
            }).catch((error) => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Unable to get data'
                })
            })
    }, [url]);

    return state;
}