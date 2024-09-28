import { useContext, useState } from 'react';
import LikeItem from './LikeItem';
import { LIKELISTCONTAINER } from './styled';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Link } from 'react-router-dom';

const LikeList = () => {
    const { likeData } = useContext(GlobalContext);

    return (
        <LIKELISTCONTAINER>
            {likeData.length > 0 ? (
                likeData.map((item) => <LikeItem key={item.id} {...item} />)
            ) : (
                <div className='noCon'>
                    <h3>찜 한 목록이 없습니다.</h3>
                    <Link to='/gallery'>목록 보기</Link>
                </div>
            )}
        </LIKELISTCONTAINER>
    );
};

export default LikeList;
