import axios from 'axios';
import { useContext, useEffect } from 'react';
import { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [ip, setIp] = useState();
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userList, setUserList] = useState(
        localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : []
    );
    const { setLikeData } = useContext(GlobalContext);
    const navigate = useNavigate();
    const login = (email, password) => {
        if (userList.length === 0) {
            alert('회원 가입후 이용해 주세요');
            navigate('/join');
        } else {
            if (!email && !password) {
                return alert('누락된 정보가 있습니다.');
            }
            if (userList.find((item) => item.email !== email)) {
                return alert('아아디가 틀렸습니다');
            } else if (userList.find((item) => item.password !== password)) {
                return alert('비밀번호가 틀렸습니다.');
            } else if (
                userList.find((item) => item.email === email) &&
                userList.find((item) => item.password === password)
            ) {
                alert('로그인성공');
                setIsAuth(true);
                setUserId(userList.find((item) => item.email === email).uuid);
                setUser(userList.find((item) => item.email === email).name);
                navigate(-1);
            } else {
                alert('Error');
            }
        }
    };
    const logout = () => {
        alert(`${user}님 로그아웃 되었습니다.`);
        setLikeData([]);
        setIsAuth(false);
        setUser(null);
        setUserId(null);
        navigate('/');
    };

    const userJoin = (name, email, password) => {
        if (!name && !email && !password) {
            alert('누락된 정보가 있습니다.');
        } else if (userList.find((item) => item.email === email)) {
            return alert('해당 이메일로 가입된 정보가 존재합니다.');
        } else if (userList.find((item) => item.ip === ip)) {
            return (
                alert(
                    `${
                        userList.find((item) => item.ip === ip).email
                    }로 이미 가입된 아이디가 있습니다.`
                ) & navigate('/login')
            );
        } else {
            const uuid = Math.floor(Math.random() * 10000);
            setUserList([...userList, { uuid, name, email, password, ip }]);
            setUserId(uuid);
            alert('회원가입이 완료 되었습니다.');
            setIsAuth(true);
            setUser(name);
            navigate(-1);
        }
    };
    useEffect(() => {
        axios.get('https://geolocation-db.com/json/').then((res) => {
            setIp(res.data.IPv4);
        });
    }, []);
    useEffect(() => {
        if (userList) localStorage.setItem('userList', JSON.stringify(userList));
    }, [userList]);

    const value = useMemo(
        () => ({ login, logout, isAuth, user, userJoin, userId }),
        [login, logout, isAuth, user, userJoin, userId]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
