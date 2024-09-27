import GalleryList from '../components/gallery/GalleryList';
import { GALLERYCONTAINER } from './styled';
import GalleryLoading from '../components/gallery/GalleryLoading';
import SubNav from '../components/common/SubNav';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const Gallery = () => {
    const { loading, error } = useContext(GlobalContext);
    if (error) return alert(error);
    return (
        <GALLERYCONTAINER>
            <div className='inner'>
                <h2>Porshce Gallery</h2>
                {loading ? <GalleryList /> : <GalleryLoading />}
            </div>
            <SubNav />
        </GALLERYCONTAINER>
    );
};

export default Gallery;
