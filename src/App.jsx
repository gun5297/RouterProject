import GalleryInfo from './components/gallery/GalleryInfo';
import NewsDetails from './components/main/NewsDetails';
import Layout from './Layout/Layout';
import About from './page/About';
import Board from './page/Board';
import Gallery from './page/Gallery';
import Like from './page/Like';
import Main from './page/Main';
import GlobalStyle from './styled/reset';
import { BrowserRouter, Route, Routes, Link, HashRouter } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='about' element={<About />} />
                        <Route path='news' element={<NewsDetails />} />
                        <Route path='gallery'>
                            <Route index element={<Gallery />} />
                            <Route path=':userId' element={<GalleryInfo />} />
                        </Route>
                        <Route path='board' element={<Board />} />
                        <Route path='like' element={<Like />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
