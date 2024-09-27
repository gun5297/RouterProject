import { Link } from 'react-router-dom';
import { LIKEITEMCONTAINER } from './styled';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const LikeItem = ({ id, webformatURL, user }) => {
    const { likeData, delLikeData } = useContext(GlobalContext);
    const [like, setLike] = useState(likeData.find((item) => item.id == id) ? true : false);

    useEffect(() => {
        !like && delLikeData(id);
    }, [like]);
    return (
        <LIKEITEMCONTAINER color={like ? '#b71c1c' : '#fafafa'}>
            <div className='img-wrap'>
                <img src={webformatURL} alt='' />
            </div>
            <div className='text-wrap'>
                <p>{user}</p>
                <Link to={`/gallery/${id}`}>
                    <button>자세히보기</button>
                </Link>
                <span onClick={() => setLike(!like)}>
                    <i className='xi-heart'></i>
                </span>
            </div>
        </LIKEITEMCONTAINER>
    );
};

export default LikeItem;
