import { Link } from 'react-router-dom';
import { NAVCONTAINER } from './styled';

const Nav = () => {
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
        </NAVCONTAINER>
    );
};

export default Nav;
