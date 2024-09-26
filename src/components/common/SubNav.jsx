import { SUBNAVCONTAINER } from './styled';

const subNavList = [
    { id: 1, title: '카이엔쿠페 하이라이트' },
    { id: 2, title: '360°' },
    { id: 3, title: '주요 사양' },
    { id: 4, title: 'Cayenne 모델' },
    { id: 5, title: '모델 및 사양' },
    { id: 6, title: '나만의 포르쉐 만들기' },
    { id: 7, title: '포르쉐 커넥트' },
    { id: 8, title: 'Discover Live Stories' },
    { id: 9, title: '다음 단계' },
];

const SubNav = () => {
    return (
        <SUBNAVCONTAINER>
            <ul>
                {subNavList.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </SUBNAVCONTAINER>
    );
};

export default SubNav;
