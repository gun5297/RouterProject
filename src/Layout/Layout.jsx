import { Outlet } from 'react-router-dom';
import { LAYOUTCONTAINER } from '../page/styled';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalProvider from '../contexts/GlobalContext';
import BoardProvider from '../contexts/BoardContext';
import AuthProvider from '../contexts/AuthContext';
import TagProvider from '../contexts/TagContext';

const Layout = () => {
    return (
        <GlobalProvider>
            <BoardProvider>
                <AuthProvider>
                    <TagProvider>
                        <LAYOUTCONTAINER>
                            <Header />
                            <Outlet />
                            <Footer />
                        </LAYOUTCONTAINER>
                    </TagProvider>
                </AuthProvider>
            </BoardProvider>
        </GlobalProvider>
    );
};

export default Layout;
