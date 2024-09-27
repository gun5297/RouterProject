import { createContext, useEffect, useMemo, useState } from 'react';

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
    const [likeData, setLikeData] = useState([]);
    const addLikeData = (data) => {
        setLikeData([...likeData, data]);
    };
    const delLikeData = (id) => {
        setLikeData(likeData.filter((item) => item.id !== id));
    };
    const value = useMemo(
        () => ({ likeData, setLikeData, addLikeData, delLikeData }),
        [likeData, setLikeData, addLikeData, delLikeData]
    );
    useEffect(() => {
        console.log(likeData);
    }, [likeData]);
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
