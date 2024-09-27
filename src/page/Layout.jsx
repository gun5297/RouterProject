import { Outlet } from 'react-router-dom';
import { LAYOUTCONTAINER } from './styled';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalProvider from '../contexts/GlobalContext';

const Layout = () => {
    return (
        <GlobalProvider>
            <LAYOUTCONTAINER>
                <Header />
                <Outlet />
                <Footer />
            </LAYOUTCONTAINER>
        </GlobalProvider>
    );
};

export default Layout;
