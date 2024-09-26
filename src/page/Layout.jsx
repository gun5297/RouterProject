import { Outlet } from 'react-router-dom';
import { LAYOUTCONTAINER } from './styled';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Layout = () => {
    return (
        <LAYOUTCONTAINER>
            <Header />
            <Outlet />
            <Footer />
        </LAYOUTCONTAINER>
    );
};

export default Layout;
