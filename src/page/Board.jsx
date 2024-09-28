import { useContext, useEffect, useState } from 'react';
import BoardList from '../components/board/Board.List';
import BoardPaging from '../components/board/BoardPaging';
import { GlobalContext } from '../contexts/GlobalContext';
import '../components/board/style.css';
import { BOARDCONTAINER } from './styled';

const Board = () => {
    const { barddata: data, bardloading: Loading, barderror: error } = useContext(GlobalContext);
    /** 현재페이지 */
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [totalPage, setTotalPage] = useState([]);
    const [lastPost, setLastPost] = useState([]);
    const [firstPost, setFirstPost] = useState([]);
    const [pageNumber, setPageNumber] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    useEffect(() => {
        if (data && Loading) {
            setTotalPage(data.length);
            setLastPost(currentPage * postsPerPage);
            setFirstPost(lastPost - postsPerPage);
            setPageNumber(Math.ceil(totalPage / postsPerPage));
            setCurrentPosts(data.slice(firstPost, lastPost));
        }
    }, [data, Loading, error]);
    if (data && Loading && !error)
        return (
            <BOARDCONTAINER>
                <div className='board'>
                    <div className='inner'>
                        <h2>게시판</h2>
                        <table>
                            <caption>게시판</caption>
                            <colgroup>
                                <col className='id' />
                                <col className='title' />
                                <col className='body' />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>타이틀</th>
                                    <th>설명</th>
                                </tr>
                            </thead>
                            <tbody className='table-body'>
                                <BoardList currentPosts={currentPosts} Loading={Loading} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </BOARDCONTAINER>
        );
};

export default Board;
