import { Link } from 'react-router-dom';
import { GALLERYITEMCONTAINER } from './styled';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { GalleryContext } from '../../contexts/GalleryContext';

const GalleryItem = ({ id, webformatURL, user }) => {
    const { likeData, addLikeData, delLikeData } = useContext(GlobalContext);
    const { data } = useContext(GalleryContext);

    const [like, setLike] = useState(likeData.find((item) => item.id == id) ? true : false);
    useEffect(() => {
        like ? addLikeData(data.find((item) => item.id == id)) : delLikeData(id);
    }, [like]);
    return (
        <GALLERYITEMCONTAINER color={like ? '#b71c1c' : '#fafafa'}>
            <div className='img-wrap'>
                <img src={webformatURL} alt='' />
            </div>
            <div className='text-wrap'>
                <p>{user}</p>
                <Link to={`${id}`}>
                    <button>자세히 보기</button>
                </Link>
                <span onClick={() => setLike(!like)}>
                    <i className='xi-heart'></i>
                </span>
            </div>
        </GALLERYITEMCONTAINER>
    );
};

export default GalleryItem;