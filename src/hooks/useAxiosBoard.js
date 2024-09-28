import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxiosBoard = (urlVal = []) => {
    // const [data, setData] = useState(urlVal);
    const [barddata, setData] = useState([]);
    const [bardloading, setLoading] = useState(false);
    const [barderror, setError] = useState(null);

    const getData = () => {
        axios
            .get(urlVal)
            .then((res) => {
                setData(res.data);
                setLoading(true);
                setError(null);
            })
            .catch((error) => {
                setData([]);
                setLoading(false);
                setError(error);
            });
    };
    useEffect(() => {
        getData();
    }, [urlVal]);

    return { barddata, setData, bardloading, barderror };
};
