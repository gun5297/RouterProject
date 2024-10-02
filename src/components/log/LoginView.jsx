import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { BodyContainer, FormContainer } from './style';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
    const { login, logout } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        setEmail('');
        setPassWord('');
    };
    return (
        <BodyContainer>
            <FormContainer onSubmit={onSubmit}>
                <p>
                    <label htmlFor=''> 이메일 </label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='ex@naver.com'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor=''> 비밀번호 </label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                </p>
                <p>
                    <button>로그인</button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                        }}
                    >
                        취소
                    </button>
                </p>
            </FormContainer>
        </BodyContainer>
    );
};

export default LoginView;
