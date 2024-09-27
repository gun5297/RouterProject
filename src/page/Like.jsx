import SubNav from '../components/common/SubNav';
import LikeList from '../components/like/LikeList';
import { LIKECONTAINER } from './styled';

const Like = () => {
    return (
        <LIKECONTAINER>
            <h2>Your Like List</h2>
            <LikeList />
            <SubNav />
        </LIKECONTAINER>
    );
};

export default Like;
