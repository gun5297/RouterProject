import { useContext } from 'react';
import { BoardContext } from '../../contexts/BoardContext';
import BoardItem from './BoardItem';
import { BOARDLISTCONTAINER } from './styled';

const BoardList = ({ currentPosts, loading }) => {
    const { data } = useContext(BoardContext);
    if (!loading) return <span>loading</span>;
    return (
        <BOARDLISTCONTAINER>
            {data.map((item) => item.isDone && <BoardItem key={item.id} {...item} />)}
            {currentPosts.map(
                (item) => item.isDone === false && <BoardItem key={item.id} {...item} />
            )}
        </BOARDLISTCONTAINER>
    );
};

export default BoardList;
