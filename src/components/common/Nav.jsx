import { Link } from 'react-router-dom';
import { NAVCONTAINER } from './styled';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const Nav = () => {
    const { likeData } = useContext(GlobalContext);
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
            <Link to='like'>
                <div className='like'>
                    <i className='xi-heart'></i>
                    <span>{likeData.length}</span>
                </div>
            </Link>
        </NAVCONTAINER>
    );
};

export default Nav;
