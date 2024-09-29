import { useContext, useState } from 'react';
import BoardList from '../components/board/Board.List';
import BoardPaging from '../components/board/BoardPaging';
import { BOARDCONTAINER } from './styled';
import { BoardContext } from '../contexts/BoardContext';

const datalist = [
    {
        id: 1,
        title: '포르쉐코리아, 국가무형유산 전승 지원사업 ‘퓨처 헤리티지’ 수여식 진행',
        body: '서울. 포르쉐코리아 (대표 홀가 게어만)가 한국문화재재단 (이사장 최영창)과 함께 지난 18일 서울 중구에 위치한 한국의집에서 국가무형유산 지원을 위한 ‘포르쉐 퓨처 헤리티지’ 전승지원금 수여식을 진행했다고 밝혔다.',
        isDone: false,
    },
    {
        id: 2,
        title: '포르쉐코리아, 예술 창업 지원사업 포르쉐 프런티어 스타트업 참가 기업 공모',
        body: '서울. 포르쉐코리아(대표 홀가 게어만)가 서울문화재단(대표 이창기)과 함께 예술 분야에서 창의적인 아이디어를 육성하는 유망 플랫폼을 지원하는 포르쉐 프런티어 스타트업에 참여할 국내 예술 스타트업을 모집한다고 밝혔다.',
        isDone: false,
    },
    {
        id: 3,
        title: '포르쉐 AG, 2024년도 1분기 실적 발표',
        body: '슈투트가르트. 포르쉐 AG (Dr. Ing. h.c. F. Porsche AG)가 2024년도 1분기 동안 전년 동기 대비 4퍼센트 감소한 총 77,640대를 인도하며 안정적인 실적을 유지했다.',
        isDone: false,
    },
    {
        id: 4,
        title: '포르쉐 AG, 신형 카이엔 GTS 공개',
        body: '포르쉐가 신형 카이엔 GTS로 지난 2023년 대대적인 업그레이드를 통해 선보인 3세대 카이엔 라인업을 완성한다. 독특한 디자인의 SUV와 쿠페 모델로 제공되는 신형 카이엔 GTS는 최고출력 500마력 (PS)의 강력한 트윈 터보 V8 엔진과 성능 지향적인 섀시 시스템, 확장된 기본 사양을 제공한다.',
        isDone: false,
    },
    {
        id: 5,
        title: '포르쉐코리아, 3세대 신형 파나메라 국내 공식 출시',
        body: '서울. 포르쉐코리아 (대표 홀가 게어만)가 더 강력한 드라이브 시스템을 갖춘 럭셔리 스포츠 세단 3세대 신형 파나메라를 국내 공식 출시한다고 밝혔다. 국내에는 파나메라4와 파나메라 터보 E-하이브리드를 시작으로 연내 파나메라 4E-하이브리드도 출시할 계획이다.',
        isDone: false,
    },
    {
        id: 6,
        title: '포르쉐 AG, 역대 최대 실적 달성 및 브랜드 역사 상 가장 많은 신차 공개 계획 발표',
        body: '슈투트가르트. 포르쉐 AG (Dr. Ing. h.c. F. Porsche AG)가 2023년 회계연도 기준 역대 최대 실적을 다시 한번 경신하고, 2024년은 브랜드 역사 상 가장 많은 신차를 공개할 계획이라고 밝혔다.',
        isDone: false,
    },
    {
        id: 7,
        title: '포르쉐 AG, ‘타이칸 터보 GT 바이작 패키지’로 랩 타임 신기록 달성',
        body: '포르쉐는 ‘타이칸 터보 GT’와 ‘타이칸 터보 GT바이작 패키지’로 순수 전기 스포츠 세단 타이칸의 모델 라인업을 확장한다. 두 모델 모두 1,100마력 (PS) 이상의 출력을 발휘하며 경량 구조 및 다양한 공기 역학 기능과 함께 한 차원 높은 드라이빙 다이내믹을 제공한다. 리어 액슬은 실리콘 카바이드를 반도체 소재를 사용한 더 강력하고 효율적인 펄스 인버터가 탑재된다. 타이칸 터보 GT 바이작 패키지는 트랙 전용으로 뒷좌석을 제거해 출력 대비 중량에서 훨씬 더 우수해졌다.',
        isDone: false,
    },
    {
        id: 8,
        title: '포르쉐코리아, 창립 10주년 기념 포르쉐 두 드림 캠페인 사회공헌 확대',
        body: '서울. 포르쉐코리아(대표 홀가 게어만)가 올해 창립 10주년을 기념해 자사 사회공헌 캠페인 ‘포르쉐 두 드림(Porsche Do Dream)’의 지원 범위를 5 개 분야 10 개 프로그램으로 확대한다고 밝혔다.',
        isDone: false,
    },
    {
        id: 9,
        title: '포르쉐코리아, 서비스 경쟁력 강화 위한 ‘2023 포르쉐 애프터서비스 챌린지 (PACE) 시상식 개최',
        body: '서울. 포르쉐코리아 (대표 홀가 게어만)가 지난 21일 강남구 파르나스 타워에 위치한 포르쉐코리아 오피스에서 서비스센터 및 임직원들을 시상하는 ‘2023 포르쉐 애프터세일즈 챌린지 (Porsche Aftersales ChallengE, PACE)’시상식을 진행했다고 밝혔다.',
        isDone: false,
    },
    {
        id: 10,
        title: '포르쉐 AG, 신형 파나메라 E-하이브리드 모델 공개',
        body: '포르쉐가 ‘파나메라 4 E-하이브리드’와 ‘파나메라 4S E-하이브리드’를 공개하며 파나메라 제품 라인을 확장한다. 인상적인 가속력과 드라이빙 퍼포먼스, 더 강력한 E-퍼포먼스를 통해 최대 전기 주행거리는 96km에 이른다.',
        isDone: false,
    },
    {
        id: 11,
        title: '포르쉐, 건강한 포인트 선두로 IMSA 피날레를 향하다',
        body: '포르쉐가 인디애나폴리스에서 열린 IMSA 웨더테크 스포츠카 챔피언십의 6시간 레이스를 큰 성공으로 마무리했습니다: 상위 GTP 부문에서 포르쉐 펜스케 모터스포츠는 6위 포르쉐 963으로 다시 3위로 시상대에 올랐습니다. 그 결과, 제작진은 제조업체, 드라이버, 팀 순위에서 상당한 우위를 점하며 로드 애틀랜타(10월 12일)에서 열리는 시즌 최종 라운드로 향합니다.',
        isDone: false,
    },
    {
        id: 12,
        title: '포르쉐 코리아 신임 대표이사',
        body: '2024년 10월 1일, 49세의 마티아스 버스가 포르쉐 코리아의 최고경영자(CEO, 대표이사) 자리를 이어받습니다.마티아스 버스는 25년 이상 독일과 아시아 자동차 업계에서 다양한 관리 직책을 맡아 왔습니다. 가장 최근에는 2022년 초부터 폭스바겐 상용차에서 독일 시장 수석 이사직을 맡고있습니다. 국제적으로 경험이 풍부한 영업 전문가인 마티아스 버스는 빠르게 성장하는 포르쉐 시장 중 하나인 포르쉐 코리아를 책임지게 됩니다.',
        isDone: false,
    },
    {
        id: 13,
        title: '포르쉐 터보와 세계 최고의 주행 도로',
        body: '50년 세계 대전 이후 가장 큰 스포츠차를 생산한 모델 설계와 상징적인 스포츠차를 제작하는 모델 설계가 종종 주장했다.포르쉐는 2세기 반세기 동안 특별한 행사가 열린다.',
        isDone: false,
    },
    {
        id: 14,
        title: '타이칸 터보 K-에디션 공개',
        body: '디자인 플랫폼 캡슐의 일곱 번째 예술은 디자인 플랫폼 캡슐과 협업했다.캡슐 드림케이프 #01 서울 몰입은 꿈과 혁신이 만나는 초현실세계로 방문객들을 초대하는 초현실세계로 초대한다.새로운 캡슐 꿈의 첫 행사는 24~24년부터 서울 프랑수아비 예술 박람회에 참가하기 위한 첫 번째 행사는 2024년 9월 4-18년 9월 8월 8일부터 9월 4일까지 열렸다.',
        isDone: false,
    },
    {
        id: 15,
        title: '한국 문화에서 영감을 받은 타이칸 터보 K-에디션 한정 출시',
        body: '홀리히리만은 포르쉐 DNA와 한국 사회의 긴밀한 연결에 대한 가시적 표현을 빌려줄 수 있다"고 말했다.예를 들면, 일부 외부 및 내부 세부 세부 정보 강조 표시는 손흥민의 프로그램을 통해 가능한 광범위한 품질 사용자 정의입니다.',
        isDone: false,
    },
    {
        id: 16,
        title: '포르쉐 펜케 모터 포트는 텍사스에서 싸우는 정신을 보여준다.',
        body: '이에 따라, 프랑스 출신의 운전사들이 프랑스, 벨기에의 수상자인 카빈과 벨기에의 수상자를 방어했다.제조사의 챔피언쉽에서, 포르쉐는 두 번째 경주에서 2위를 차지했다.그들은 텍사스 주 텍사스 주에서는 페라 911 GT3R3 클래스에서 공연을 마쳤다.',
        isDone: false,
    },
    {
        id: 17,
        title: '포르쉐와 팬톤은 독점 컬러 터키를 제시한다.',
        body: '팬톤 컬러 인스티튜트는 디자인과 패션계에 중요한 자극을 제공하는 인기 있고 혁신적인 색상의 미리보기인 팬톤 패션 컬러 트렌드 보고서를 1년에 두 번 발행합니다. 뉴욕 패션위크 최신호(뉴욕패션위크, 2024년 9월 6일~11일)에서 팬톤은 자동차 브랜드의 맞춤형 색상을 소개하는 최초의 보고서인 터보나이트를 선보입니다.',
        isDone: false,
    },
];

const Board = () => {
    const { data, loading, error } = useContext(BoardContext);

    const [currentPage, setCurrentPage] = useState(1);
    /** 한 페이지에 보여줄 컨텐츠 개수 */
    const [postsPerPage, setPostsPerPage] = useState(7);
    const totalPage = data.length;
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const pageNumber = Math.ceil(totalPage / postsPerPage);
    const currentPosts = data.slice(firstPost, lastPost);
    const onCurrent = (id) => {
        setCurrentPage(id);
    };
    const pageChange = (x) => {
        if (x == 'next') {
            setCurrentPage((cnt) => (cnt < pageNumber ? cnt + 1 : cnt));
        } else if (x == 'prev') {
            setCurrentPage((cnt) => (cnt > 1 ? cnt - 1 : cnt));
        } else if (x == 'first') {
            setCurrentPage(1);
        } else if (x == 'last') {
            setCurrentPage(pageNumber);
        } else {
            alert('잘못 선택하셨습니다.');
        }
    };

    if (data && loading && !error)
        return (
            <BOARDCONTAINER>
                <div className='inner'>
                    <h2>포르쉐 보도자료</h2>
                    <BoardList currentPosts={currentPosts} loading={loading} />
                    <BoardPaging
                        pageNumber={pageNumber}
                        onCurrent={onCurrent}
                        pageChange={pageChange}
                    />
                </div>
            </BOARDCONTAINER>
        );
};

export default Board;
