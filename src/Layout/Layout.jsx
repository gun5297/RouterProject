import { Outlet } from 'react-router-dom';
import { LAYOUTCONTAINER } from '../page/styled';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalProvider from '../contexts/GlobalContext';
import BoardProvider from '../contexts/BoardContext';

const Layout = () => {
    return (
        <GlobalProvider>
            <BoardProvider>
                <LAYOUTCONTAINER>
                    <Header />
                    <Outlet />
                    <Footer />
                </LAYOUTCONTAINER>
            </BoardProvider>
        </GlobalProvider>
    );
};

export default Layout;
