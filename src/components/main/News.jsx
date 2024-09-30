import { NEWSCONTAINER } from './styled';

const News = () => {
    return (
        <NEWSCONTAINER>
            <h2>porsche news</h2>
            <div className='inner'>
                <div className='img-wrap'>
                    <img src='/images/porsche-news.webp' alt='' />
                </div>
                <div className='content-wrap'>
                    <h3>
                        Cayenne GTS<p>Coupé</p>
                    </h3>
                    <p>
                        포르쉐의 GTS는 언제나 직접적이고 진실하며 강렬한 드라이빙의 즐거움을
                        상징합니다. 카이엔 GTS 쿠페는 이러한 GTS의 상징적인 의미를 가장 현대적으로
                        표현한 모델입니다.
                    </p>
                    <button>자세히 알아보기</button>
                </div>
            </div>
        </NEWSCONTAINER>
    );
};

export default News;
