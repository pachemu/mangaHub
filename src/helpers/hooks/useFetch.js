import {useEffect, useState, useMemo} from "react";

export const useFetch = (func, params) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const memoizedParams = useMemo(() => params, [params]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const result = await func(memoizedParams);
                if (isMounted) {
                    setData(result);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [func, memoizedParams]);

    return {data, error, isLoading};
};
