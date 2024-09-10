import { useState, useEffect } from "react"
const localCache = {}; // para manejar el caché

export const useFetch = (url) => {


    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = async () => {
        setstate({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    }



    const getFetch = async () => {

        if (localCache[url]) {
            console.log("usando caché");
            setstate({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            })
            return;
        }

        setLoadingState();
        const resp = await fetch(url);

        if (!resp.ok) {
            setstate({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            })
            return;
        }

        const data = await resp.json();

        setstate({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        })
        // caché
        localCache[url] = data;
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
