import JoinView from '../components/join/JoinView';
import { LOGINCONTAINER } from './styled';

const Join = () => {
    return (
        <LOGINCONTAINER>
            <h2>회원가입</h2>
            <div>
                <JoinView />
            </div>
        </LOGINCONTAINER>
    );
};

export default Join;
