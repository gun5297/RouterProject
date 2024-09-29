import { useContext, useState } from 'react';
import { BOARDITEMCONTAINER } from './styled';
import { BoardContext } from '../../contexts/BoardContext';
import BoardDetails from './BoardDetails';

const BoardItem = ({ id, title, body, isDone }) => {
    const { changeIsDone } = useContext(BoardContext);
    const [on, setOn] = useState(false);
    return (
        <>
            <BOARDITEMCONTAINER className={isDone ? 'active' : ''} onClick={() => setOn(!on)}>
                {isDone ? <i className='xi-label' /> : <span>{id}</span>}
                <p>{title}</p>
                <i
                    className={isDone ? 'xi-toggle-on' : 'xi-toggle-off'}
                    onClick={() => changeIsDone(id)}
                ></i>
            </BOARDITEMCONTAINER>
            {on && <BoardDetails body={body} />}
        </>
    );
};

export default BoardItem;
