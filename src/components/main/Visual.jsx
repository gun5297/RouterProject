import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { VISUALCONTAINER } from './styled';

const Visual = () => {
    return (
        <VISUALCONTAINER>
            <Swiper spaceBetween={0} slidesPerView={1}>
                <SwiperSlide>
                    <div className='img-wrap'>
                        <img src='/images/visual1.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img-wrap'>
                        <img src='/images/visual2.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img-wrap'>
                        <img src='/images/visual3.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img-wrap'>
                        <img src='/images/visual4.jpg' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </VISUALCONTAINER>
    );
};

export default Visual;
