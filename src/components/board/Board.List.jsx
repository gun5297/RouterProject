import BoardItem from './BoardItem';
import { BOARDLISTCONTAINER } from './styled';

const BoardList = ({ currentPosts, loading }) => {
    return (
        <BOARDLISTCONTAINER>
            <BoardItem />
            <BoardItem />
            <BoardItem />
            <BoardItem />
        </BOARDLISTCONTAINER>
    );
};

export default BoardList;
