import { useContext } from 'react';
import { NEWSDETAILSCONTAINER } from './styled';
import { AuthContext } from '../../contexts/AuthContext';
import TagForm from './TagForm';
import { Link } from 'react-router-dom';
import { TagContext } from '../../contexts/TagContext';

const NewsDetails = () => {
    const { isAuth, user, userId } = useContext(AuthContext);
    const { tagData, removeTagData } = useContext(TagContext);
    return (
        <NEWSDETAILSCONTAINER>
            <div className='inner'>
                <h2>Cayenne GTS Coupé</h2>
                <div className='img-wrap'>
                    <img src='images/porsche-news.webp' />
                </div>
                <p>
                    신형 카이엔 GTS 쿠페는 카이엔 부분변경 기반 고성능 트림이다. 신형 카이엔 GTS
                    쿠페에는 업그레이드된 4.0리터 V8 가솔린 트윈 터보 엔진과 8단 팁트로닉 S
                    자동변속기가 탑재됐다. 최고출력 510마력, 최대토크는 67.3kgm다. 이전 세대보다
                    각각 40마력, 4.1kgm 증가했다.
                </p>
                <p>
                    정지상태에서 가속 성능은 100km/h까지 4.4초, 160km/h까지 10.3초, 200km/h까지는
                    16.7초가 소요된다. 최고속도는 275km/h다. 신형 카이엔 GTS 쿠페는 카이엔
                    플래그십인 터보 GT와 유사한 PTM 냉각 회로, 피벗 베어링을 통한 앞바퀴 네거티브
                    캠버 증가가 특징이다.
                </p>
                <p>
                    신형 카이엔 GTS 쿠페 섀시는 GTS 전용으로 튜닝됐다. 어댑티브 에어 서스펜션은
                    2챔버 기술의 풀로드 베어링 에어 스프링 스트럿과 10mm 낮아진 지상고로 스포티한
                    주행감을 제공한다. 액티브 롤 안정화 시스템이 포함된 포르쉐 다이내믹 섀시
                    컨트롤(PDCC)은 옵션이다.
                </p>

                {isAuth ? (
                    <TagForm />
                ) : (
                    <div className='not-login'>
                        <span>로그인 후 이용가능합니다.</span>
                        <Link to='/login'>로그인</Link>
                    </div>
                )}

                <ul className='tag'>
                    <span className='tag-span'>댓글 {tagData.length}</span>
                    {tagData.length !== 0 ? (
                        tagData.map((item) => (
                            <li key={item.id}>
                                <span>{item.user}</span>
                                <span>{item.text}</span>

                                {item.uuid === userId && (
                                    <div className='btn-wrap'>
                                        <button onClick={() => removeTagData(item.id)}>삭제</button>
                                    </div>
                                )}
                            </li>
                        ))
                    ) : (
                        <li>
                            <span>게시된 댓글이 없습니다.</span>
                        </li>
                    )}
                </ul>
            </div>
        </NEWSDETAILSCONTAINER>
    );
};

export default NewsDetails;
