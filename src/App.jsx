import GalleryInfo from './components/gallery/GalleryInfo';
import About from './page/About';
import Board from './page/Board';
import Gallery from './page/Gallery';
import GalleryLayout from './page/GalleryLayout';
import Layout from './page/Layout';
import Main from './page/Main';
import GlobalStyle from './styled/reset';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='about' element={<About />} />
                        <Route path='gallery' element={<GalleryLayout />}>
                            <Route index element={<Gallery />} />
                            <Route path=':userId' element={<GalleryInfo />} />
                        </Route>
                        <Route path='board' element={<Board />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
