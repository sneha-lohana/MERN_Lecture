import { useEffect, useState } from "react";


export const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        fetch(url)
            .then(res => {
                console.log(res);
                if (!res.ok){
                    return setError(res.statusText);
                }
                return res.json();
            })
            .then(json => setData(json))
            .catch(err=> {
                console.log(err);
            })
            .finally(()=>{
                setLoading(false);
            })
    }, [url]);
    return {data, loading, error};
}