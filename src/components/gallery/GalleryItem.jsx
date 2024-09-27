import { Link } from 'react-router-dom';
import { GALLERYITEMCONTAINER } from './styled';
import { useState } from 'react';

const GalleryItem = ({ id, webformatURL, user }) => {
    const [like, setLike] = useState(false);
    return (
        <GALLERYITEMCONTAINER color={like ? '#b71c1c' : '#fafafa'}>
            <div className='img-wrap'>
                <img src={webformatURL} alt='' />
            </div>
            <div className='text-wrap'>
                <p>{user}</p>
                <Link to={`${id}`}>
                    <button>더보기</button>
                </Link>
                <span onClick={() => setLike(!like)}>
                    <i className='xi-heart'></i>
                </span>
            </div>
        </GALLERYITEMCONTAINER>
    );
};

export default GalleryItem;
