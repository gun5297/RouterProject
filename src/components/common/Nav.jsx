import { Link } from 'react-router-dom';
import { NAVCONTAINER } from './styled';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { AuthContext } from '../../contexts/AuthContext';

const Nav = () => {
    const { likeData } = useContext(GlobalContext);
    const { isAuth, logout } = useContext(AuthContext);
    return (
        <NAVCONTAINER>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>GALLERY</Link>
                    </li>
                    <li>
                        <Link to='/board'>BOARD</Link>
                    </li>
                </ul>
            </nav>
            {isAuth ? (
                <div className='wrap'>
                    <div className='logout' onClick={logout}>
                        Logout
                    </div>
                    <Link to='like'>
                        <div className='like'>
                            <i className='xi-heart'></i>
                            <span>{likeData.length}</span>
                        </div>
                    </Link>
                </div>
            ) : (
                <div className='login'>
                    <Link to='login'>Login</Link>
                    <Link to='join'>Join</Link>
                </div>
            )}
        </NAVCONTAINER>
    );
};

export default Nav;
