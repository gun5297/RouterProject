import LoginView from '../components/log/LoginView';
import { LOGINCONTAINER } from './styled';

const Login = () => {
    return (
        <LOGINCONTAINER>
            <h2>로그인 </h2>
            <div>
                <LoginView />
            </div>
        </LOGINCONTAINER>
    );
};

export default Login;
