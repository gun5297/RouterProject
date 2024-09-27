import { createContext, useEffect, useMemo, useState } from 'react';
import { useAxios } from '../hooks/useAxios';

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
    const url = `https://pixabay.com/api/?key=45297051-2d96f9c98d89af3f97081c87c&q=porsche&image_type=photo&pretty=true`;
    const { data, loading, error } = useAxios(url);
    const [likeData, setLikeData] = useState([]);
    const addLikeData = (data) => {
        if (likeData.find((item) => item === data)) {
            return;
        } else {
            setLikeData([...likeData, data]);
        }
    };
    const delLikeData = (id) => {
        setLikeData(likeData.filter((item) => item.id !== id));
    };
    const value = useMemo(
        () => ({ likeData, setLikeData, addLikeData, delLikeData, data, loading, error }),
        [likeData, setLikeData, addLikeData, delLikeData, data, loading, error]
    );
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
