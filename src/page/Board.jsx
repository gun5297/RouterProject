import { useContext, useState } from 'react';
import BoardList from '../components/board/Board.List';
import BoardPaging from '../components/board/BoardPaging';
import { BOARDCONTAINER } from './styled';
import { BoardContext } from '../contexts/BoardContext';

const Board = () => {
    const { data, loading, error } = useContext(BoardContext);

    const [currentPage, setCurrentPage] = useState(1);
    /** 한 페이지에 보여줄 컨텐츠 개수 */
    const [postsPerPage, setPostsPerPage] = useState(7);
    const totalPage = data.length;
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const pageNumber = Math.ceil(totalPage / postsPerPage);
    const currentPosts = data.slice(firstPost, lastPost);
    const onCurrent = (id) => {
        setCurrentPage(id);
    };
    const pageChange = (x) => {
        if (x == 'next') {
            setCurrentPage((cnt) => (cnt < pageNumber ? cnt + 1 : cnt));
        } else if (x == 'prev') {
            setCurrentPage((cnt) => (cnt > 1 ? cnt - 1 : cnt));
        } else if (x == 'first') {
            setCurrentPage(1);
        } else if (x == 'last') {
            setCurrentPage(pageNumber);
        } else {
            alert('잘못 선택하셨습니다.');
        }
    };

    if (data && loading && !error)
        return (
            <BOARDCONTAINER>
                <div className='inner'>
                    <h2>포르쉐 보도자료</h2>
                    <BoardList currentPosts={currentPosts} loading={loading} />
                    <BoardPaging
                        pageNumber={pageNumber}
                        onCurrent={onCurrent}
                        pageChange={pageChange}
                    />
                </div>
            </BOARDCONTAINER>
        );
};

export default Board;
