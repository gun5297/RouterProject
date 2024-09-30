import { useContext } from 'react';
import { BoardContext } from '../../contexts/BoardContext';
import BoardItem from './BoardItem';
import { BOARDLISTCONTAINER } from './styled';
import { useSearchParams } from 'react-router-dom';

const BoardList = ({ currentPosts, loading }) => {
    const { data } = useContext(BoardContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('key') || '';
    const changeInput = (e) => {
        const key = e.target.value;
        if (key) {
            setSearchParams({ key });
        } else {
            setSearchParams({});
        }
    };
    if (!loading) return <span>loading</span>;
    return (
        <BOARDLISTCONTAINER>
            <div className='inp-wrap'>
                <input
                    type='text'
                    value={q}
                    onChange={changeInput}
                    placeholder='검색어를 입력해주세요.'
                />
            </div>
            {data.map((item) => item.isDone && <BoardItem key={item.id} {...item} />)}
            {currentPosts
                .filter(
                    (item) =>
                        item.title.toLowerCase() | item.body.toLowerCase().includes(q.toLowerCase())
                )
                .map((item) => item.isDone === false && <BoardItem key={item.id} {...item} />)}
        </BOARDLISTCONTAINER>
    );
};

export default BoardList;
