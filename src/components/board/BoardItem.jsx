import { useContext } from 'react';
import { BOARDITEMCONTAINER } from './styled';
import { BoardContext } from '../../contexts/BoardContext';

const BoardItem = ({ id, title, body, isDone }) => {
    const { changeIsDone } = useContext(BoardContext);
    return (
        <BOARDITEMCONTAINER className={isDone ? 'active' : ''}>
            {isDone ? <i className='xi-label' /> : <span>{id}</span>}
            <p>{title}</p>
            <i
                className={isDone ? 'xi-toggle-on' : 'xi-toggle-off'}
                onClick={() => changeIsDone(id)}
            ></i>
        </BOARDITEMCONTAINER>
    );
};

export default BoardItem;
