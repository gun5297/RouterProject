import News from '../components/main/News';
import Visual from '../components/main/Visual';
import { MAINCONTAINER } from './styled';
import SubNav from '../components/common/SubNav';

const Main = () => {
    return (
        <MAINCONTAINER>
            <Visual />
            <SubNav />
            <News />
        </MAINCONTAINER>
    );
};

export default Main;
