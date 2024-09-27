import { useContext, useEffect, useState } from 'react';
import GalleryItem from './GalleryItem';
import { GALLERYLISTCONTAINER } from './styled';
import { GalleryContext } from '../../contexts/GalleryContext';

const GalleryList = () => {
    const { data } = useContext(GalleryContext);
    const [onData, setOnData] = useState(null);
    const [cnt, setCnt] = useState(4);
    const onClick = () => {
        onData.length < data.length
            ? setCnt((cnt) => cnt + 4)
            : setCnt(cnt) & window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        if (data) setOnData(data.slice(0, cnt));
    }, [cnt]);
    return (
        <GALLERYLISTCONTAINER>
            {onData && onData.map((item) => <GalleryItem key={item.id} {...item} />)}
            <div className='btn-wrap' onClick={onClick}>
                <i
                    className={
                        onData && onData.length < data.length ? 'xi-angle-down' : 'xi-angle-up'
                    }
                />
            </div>
        </GALLERYLISTCONTAINER>
    );
};

export default GalleryList;