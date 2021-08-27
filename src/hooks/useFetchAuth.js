import { useEffect, useRef, useState } from 'react';


export const useFetchAuth = (payload = null, url) => {

    const [state, setState] = useState({
        data: null,
        loading: null,
        error: null
    });

    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        if (payload && url) {

            setState({
                data: null,
                loading: true,
                error: null
            });

            fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
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
                        error: true
                    })
                })
        }
    }, [payload, url]);

    return state;
}