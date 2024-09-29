import { createContext, useMemo } from 'react';
import { useAxiosBoard } from '../hooks/useAxiosBoard';

export const BoardContext = createContext(null);

const BoardProvider = ({ children }) => {
    const boardurl = `https://gist.githubusercontent.com/gun5297/f7bb520431ec62258fff114f4ac017e1/raw/2f9dc52f51664a89b50d349d24ca19b4dcc70074/porshce.json`;
    const { data, setData, loading, error } = useAxiosBoard(boardurl);
    const changeIsDone = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
    };
    const value = useMemo(
        () => ({ data, loading, error, changeIsDone }),
        [data, loading, error, changeIsDone]
    );
    return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>;
};

export default BoardProvider;
