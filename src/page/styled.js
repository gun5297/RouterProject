import styled from 'styled-components';

export const LAYOUTCONTAINER = styled.div`
    width: 100%;
`;
export const MAINCONTAINER = styled.div`
    width: 100%;
`;
export const ABOUTCONTAINER = styled.div`
    width: 100%;
    .img-wrap {
        width: 100%;
        height: 800px;
        overflow: hidden;
        position: relative;
        background: #000;
        h2 {
            text-transform: uppercase;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 80px;
            z-index: 100;
            font-weight: 700;
            color: #e0e0e0;
            user-select: none;
        }
        img {
            width: 100%;
            opacity: 0.6;
        }
    }
    p {
        padding: 0px 300px;
        margin-bottom: 20px;
        font-size: 18px;
        word-break: keep-all;
        &:nth-of-type(1) {
            margin-top: 80px;
        }
        &:nth-of-type(5) {
            margin-bottom: 80px;
        }
    }
`;
export const GALLERYCONTAINER = styled.div`
    width: 100%;
    .inner {
        width: 1400px;
        margin: auto;
        h2 {
            text-align: center;
            font-size: 50px;
            margin: 80px 0;
        }
    }
`;
export const BOARDCONTAINER = styled.div``;
export const LIKECONTAINER = styled.div`
    width: 100%;
    h2 {
        text-align: center;
        font-size: 80px;
        margin: 80px 0;
        font-weight: 700;
    }
`;
