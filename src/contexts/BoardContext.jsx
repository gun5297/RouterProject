import { createContext } from 'react';
import { useAxiosBoard } from '../hooks/useAxiosBoard';

export const BoardContext = createContext(null);

const BoardProvider = ({ children }) => {
    const boardurl = `https://jsonplaceholder.typicode.com/posts`;
    const { data, loading, error } = useAxiosBoard(boardurl);
    return <BoardContext.Provider>{children}</BoardContext.Provider>;
};

export default BoardProvider;
