import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { BodyContainer, FormContainer } from './style';
import { useContext } from 'react';

const JoinView = () => {
    const { userJoin } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        userJoin(name, email, password);
        setEmail('');
        setPassWord('');
    };
    return (
        <BodyContainer>
            <FormContainer onSubmit={onSubmit}>
                <p>
                    <label htmlFor=''> 이름 </label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        placeholder='이름을 입력해 주세요'
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor=''> 이메일 </label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='이메일을 입력해 주세요'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor=''> 비밀번호 </label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        placeholder='비밀번호를 입력해 주세요'
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                </p>
                <p>
                    <button>회원가입</button>
                </p>
            </FormContainer>
        </BodyContainer>
    );
};

export default JoinView;
