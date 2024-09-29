import { BOARDITEMCONTAINER } from './styled';

const BoardItem = () => {
    return (
        <BOARDITEMCONTAINER>
            <span>1번</span>
            <p>포르쉐 911 GT3 출고 기간은 얼마나 걸리나요?</p>
            <i className='xi-toggle-off'></i>
        </BOARDITEMCONTAINER>
    );
};

export default BoardItem;
