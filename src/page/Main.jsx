import News from '../components/main/News';
import Visual from '../components/main/Visual';
import { MAINCONTAINER } from './styled';
import SubNav from '../components/common/SubNav';
import MakePorshce from '../components/main/MakePorshce';

const Main = () => {
    return (
        <MAINCONTAINER>
            <Visual />
            <SubNav />
            <News />
            <MakePorshce />
        </MAINCONTAINER>
    );
};

export default Main;
