import { useEffect, useState } from "react";


export const useApi = (url) => {
    const controller = new AbortController();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        fetch(url, {signal: controller.signal})
            .then(res => {
                // console.log(res);
                if (!res.ok){
                    return setError(res.statusText);
                }
                return res.json();
            })
            .then(json => setData(json))
            .catch(err=> {
                console.log(err.message);
                setError(err.message);
            })
            .finally(()=>{
                setLoading(false);
            })

        // Cleanup function, will be called before previous useEffect gets destroyed.
        return () => {
            controller.abort();
        }
    }, [url]);
    return {data, loading, error};
}