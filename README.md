# Porsche Project | Context

## 프로젝트 소개

해당 프로젝트는 리액트 상태관리 라이브러리 **context 수강 1일차**에 시작한 프로젝트 입니다.

처음 사용해보는 상태관리 라이브러리로 전역 상태관리에 대한 이해와

페이지 라우팅 사용법을 익힌 프로젝트 입니다.

---

개발 기간 : 2024.09.26 ~ 2024.10.04

---

## 시작가이드

레포지토리 클론

```bash
$ git clone https://github.com/gun5297/RouterProject.git
```

디렉토리로 이동

```bash
$ cd RouterProject
```

의존성 설치

```bash
$ yarn
```

개발 서버 실행

```bash
$ yarn dev
```

## Stacks

### Environment

<img src='https://camo.githubusercontent.com/bb5ae57184d20f68d1db9e1d8927247ef860cc0f3287615c0a74743a7648684d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c25323053747564696f253230436f64652d3030374143433f7374796c653d666f722d7468652d6261646765266c6f676f3d56697375616c25323053747564696f253230436f6465266c6f676f436f6c6f723d7768697465'> <img src='https://camo.githubusercontent.com/62780b271c043bc23b7925a9a65df4ca7238f4627beea95a59ea88f6af282ba3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666f722d7468652d6261646765266c6f676f3d476974266c6f676f436f6c6f723d7768697465'><img src='https://camo.githubusercontent.com/ece305276d7f8498254501a2825469d108a09f1187c36c9d7107b78a459b8e41/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465'>

### Config

<img src='https://camo.githubusercontent.com/ebcea303627ae6f69a7c1653781fa81298827fec3badd6727e0e7c2658a474a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661736372697074266c6f676f436f6c6f723d7768697465'><img src='https://camo.githubusercontent.com/3467eb8e0dc6bdaa8fa6e979185d371ab39c105ec7bd6a01048806b74378d24c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642'>

---

# 페이지 구성

### 메인 페이지

<div style='display:flex; justify-content: center;'>
<img src ='https://github.com/user-attachments/assets/628263d0-15fb-493e-9b5a-e9f2b4da2cac' width='40%' height='100%'>
<img src='https://github.com/user-attachments/assets/fe92f2ff-ab4b-4277-a541-2d36e1ab1ebe' width='40%' height='100%'>
</div>

<div style='display:flex;justify-content: center; align-items: center;'>

|       메인 배너        |     포르쉐 뉴스     | 포르쉐 색상변경 |
| :--------------------: | :-----------------: | :-------------: |
| swiper 라이브러리 사용 |     페이지 이동     |   이미지 변경   |
|                        | 회원 전용 댓글 기능 |                 |

</div>

#### 기능 설명

1. `swiper 라이브러리`를 활용하여 마우스 클릭으로 이미지 변경 가능
2. 자세히 보기 페이지 이동

    로그인 시 댓글 작성 가능 | 본인이 작성한 댓글 삭제 가능

3. 색상 클릭 시 차량 이미지 변경

---

### 회사 소개 페이지

<div style='display:flex; justify-content: center; align-items: center;'>
<img src ='https://github.com/user-attachments/assets/bd8d4137-a1fe-4a59-b82d-378396995d01' width='80%' height='100%'>
</div>

---

### 갤러리 페이지

<div style='display:flex; justify-content: center;'>
<img src ='https://github.com/user-attachments/assets/2b0de420-f997-4cd9-824e-6db3729b80ba' width='30%' height='100%'>
<img src ='https://github.com/user-attachments/assets/cd91cc94-e401-4b11-b6ed-e24b335a4467' width='30%' height='100%'>
<img src ='https://github.com/user-attachments/assets/9e87b530-4b1a-4802-92ff-0af94cfebe47' width='30%' height='100%'>
</div>

<div style='display:flex;justify-content: center; align-items: center;'>

|    갤러리 목록    |    지세히 보기    |   좋아요 리스트    |
| :---------------: | :---------------: | :----------------: |
| 픽사베이 Api 사용 |    페이지 이동    | 좋아요 목록에 추가 |
| 4개씩 더보기 기능 | 이미지 상세페이지 |  자세히 보기 제공  |

</div>

#### 기능 설명

1. `픽사베이 Api` 비동기 활용 Porsche 관련 이미지 수집

    처음 이미지 4개 출력 더보기 클릭 시 최대 20개 까지 출력

    20개 모두 출력 시 컴포넌트 변경이 되어도 출력 수량 초기화 되지 않음

2. 자세히 보기 클릭 한 이미지 1개 출력
3. 좋아요 목록에 추가 삭제 기능 제공

    미 로그인 시 로그인 페이지로 이동

    로그인 시 우측 상단에 좋아요 표시한 사진 개수 표기

    별도 좋아요 목록 확인할 수 있는 페이지 제공

---

### 보도자료 페이지

<div style='display:flex; justify-content: center;'>
<img src ='https://github.com/user-attachments/assets/ffcaa6e2-7738-4967-ab00-6358ac8314e4' width='40%' height='100%'>
<img src='https://github.com/user-attachments/assets/8d492edc-36b7-4c39-902b-02c2c74eef41' width='40%' height='100%'>
</div>

<div style='display:flex;justify-content: center; align-items: center;'>

|      게시판      |
| :--------------: |
|   페이지네이션   |
|    검색 기능     |
| 게시글 고정 기능 |

</div>

#### 기능 설명

1. 한 페이지에 10 개씩 출력 페이지네이션 제공
2. 게시글 검색 가능

    고정된 게시글은 사라지지 않음

3. 사용자가 게시글 고정 가능

---

### 로그인 및 회원가입 페이지

<div style='display:flex; justify-content: center;'>
<img src ='https://github.com/user-attachments/assets/38ec983e-a77d-4c60-ac56-09eceb4f23f4' width='40%' height='100%'>
<img src='https://github.com/user-attachments/assets/eb9f56e9-5d73-4fc7-9787-97178234df38' width='40%' height='100%'>
</div>

<div style='display:flex;justify-content: center; align-items: center;'>

|                   로그인                   |      회원가입      |
| :----------------------------------------: | :----------------: |
|              회원 로그인 기능              |   회원 가입 기능   |
| 가입된 아이디 없을 시 회원가입 페이지 이동 | 중복 회원가입 불가 |

</div>

#### 기능 설명

1. `유저 IP`를 확인하여 가입된 아이디가 없으면 회원가입 페이지로 이동
2. `유저 IP`로 이미 가입된 아이디가 있으면 기존 가입된 아이디를 안내하고 중복 가입 거부

---

# 프로젝트를 진행하면서 느낀점

처음 진행하는 리액트 `개인 프로젝트`로 최대한 다양한 기능을 넣어 보고자 했으나,

미흡한 부분이 많은 프로젝트였습니다.

그럼에도 불구하고 **상태관리의 개념**과 **페이지 라우팅**에 친해지는 계기가 되었습니다.

`사용자 친화적`인 부분을 생각하여 로그인 페이지, 갤러리 페이지 등 곳곳에 최대한 디테일을 신경쓰며

개발 하였고 다음 프로젝트에선 더욱 더 사용자 친화적인 사이트를 개발 해야겠다고 느꼈습니다.
