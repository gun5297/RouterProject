import { useContext, useEffect, useState } from 'react';
import BoardList from '../components/board/Board.List';
import BoardPaging from '../components/board/BoardPaging';
import { GlobalContext } from '../contexts/GlobalContext';
import { BOARDCONTAINER } from './styled';

const Board = () => {
    // const { barddata: data, bardloading: Loading, barderror: error } = useContext(GlobalContext);
    /** 현재페이지 */
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [totalPage, setTotalPage] = useState([]);
    const [lastPost, setLastPost] = useState([]);
    const [firstPost, setFirstPost] = useState([]);
    const [pageNumber, setPageNumber] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);

    // if (data && Loading && !error)
    return (
        <BOARDCONTAINER>
            <div className='inner'>
                <h2>Q&A</h2>
                <BoardList />
            </div>
        </BOARDCONTAINER>
    );
};

export default Board;
