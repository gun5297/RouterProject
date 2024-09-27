import { useContext } from 'react';
import GalleryItem from './GalleryItem';
import { GALLERYLISTCONTAINER } from './styled';
import { GalleryContext } from '../../contexts/GalleryContext';

const GalleryList = () => {
    const { data } = useContext(GalleryContext);
    return (
        <GALLERYLISTCONTAINER>
            {data.map((item) => (
                <GalleryItem key={item.id} {...item} />
            ))}
        </GALLERYLISTCONTAINER>
    );
};

export default GalleryList;
