import { useParams } from 'react-router-dom';
import { GALLERYINFOCONTAINER } from './styled';
import { useContext, useEffect, useState } from 'react';
import { GalleryContext } from '../../contexts/GalleryContext';
import SubNav from '../common/SubNav';

const GalleryInfo = () => {
    const { userId } = useParams();
    const { data, loading } = useContext(GalleryContext);
    const [onData, setOnData] = useState(null);

    useEffect(() => {
        if (loading && data) {
            const sec = data.find((item) => item.id === Number(userId));
            setOnData(sec);
        }
    }, [data, loading, userId]);
    return (
        <GALLERYINFOCONTAINER>
            {onData && (
                <div className='img-wrap'>
                    <img src={onData.largeImageURL} />
                    <h2>{onData.user}</h2>
                </div>
            )}
            <SubNav />
        </GALLERYINFOCONTAINER>
    );
};

export default GalleryInfo;
