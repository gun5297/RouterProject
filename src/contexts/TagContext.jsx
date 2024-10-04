import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from './AuthContext';

export const TagContext = createContext();

const TagProvider = ({ children }) => {
    const { user, userId } = useContext(AuthContext);

    const [tagData, setTagData] = useState(
        localStorage.getItem('tagData') ? JSON.parse(localStorage.getItem('tagData')) : []
    );
    const addTagData = (txt) => {
        setTagData([
            ...tagData,
            { uuid: userId, id: Math.floor(Math.random() * 10000), user, text: txt },
        ]);
    };
    const removeTagData = (id) => {
        setTagData(tagData.filter((item) => item.id !== id));
    };
    useEffect(() => {
        if (tagData) localStorage.setItem('tagData', JSON.stringify(tagData));
    }, [tagData]);
    const value = useMemo(
        () => ({ tagData, addTagData, removeTagData }),
        [tagData, addTagData, removeTagData]
    );
    return <TagContext.Provider value={value}>{children}</TagContext.Provider>;
};

export default TagProvider;
