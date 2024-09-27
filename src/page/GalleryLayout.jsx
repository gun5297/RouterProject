import { Outlet } from 'react-router-dom';
import GalleryProvider from '../contexts/GalleryContext';

const GalleryLayout = () => {
    return (
        <>
            <GalleryProvider>
                <Outlet />
            </GalleryProvider>
        </>
    );
};

export default GalleryLayout;
