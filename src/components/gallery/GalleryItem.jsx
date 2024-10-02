import { Link, useNavigate } from 'react-router-dom';
import { GALLERYITEMCONTAINER } from './styled';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { AuthContext } from '../../contexts/AuthContext';

const GalleryItem = ({ id, webformatURL, user }) => {
    const { data, likeData, addLikeData, delLikeData } = useContext(GlobalContext);
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [like, setLike] = useState(likeData.find((item) => item.id == id) ? true : false);
    useEffect(() => {
        data && like ? addLikeData(data.find((item) => item.id == id)) : delLikeData(id);
    }, [like]);
    return (
        <GALLERYITEMCONTAINER color={like ? '#b71c1c' : '#fafafa'}>
            <div className='img-wrap'>
                <img src={webformatURL} alt='' />
            </div>
            <div className='text-wrap'>
                <p>{user}</p>
                <Link to={`/gallery/${id}`}>
                    <button>자세히 보기</button>
                </Link>
                <span
                    onClick={() =>
                        isAuth
                            ? setLike(!like)
                            : alert('로그인 후 이용가능한 서비스 입니다.') & navigate('/login')
                    }
                >
                    <i className='xi-heart'></i>
                </span>
            </div>
        </GALLERYITEMCONTAINER>
    );
};

export default GalleryItem;
