import styled from 'styled-components';

export const GALLERYLISTCONTAINER = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;
    .btn-wrap {
        margin-top: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
            font-size: 50px;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 700;
            animation: colorChange 3s infinite;
        }
    }
    @keyframes colorChange {
        0% {
            color: initial;
            transform: scale(1);
        }
        25% {
            transform: scale(1.2);
        }
        50% {
            color: #b71c1c;
            transform: scale(1);
        }
        75% {
            transform: scale(1.2);
        }
        100% {
            color: initial;
            transform: scale(1);
        }
    }
`;
export const GALLERYITEMCONTAINER = styled.li`
    width: 45%;
    box-sizing: border-box;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    background: #212121;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transition: all 0.3s;
    position: relative;
    &:not(:nth-child(even)) {
        margin-right: 5%;
    }
    &:hover {
        transform: scale(1.02);
        .img-wrap {
            opacity: 1;
        }
    }
    .img-wrap {
        width: 60%;
        height: 450px;
        overflow: hidden;
        opacity: 0.8;
        transition: all 0.3s;
        img {
            height: 100%;
        }
    }
    .text-wrap {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            color: #fafafa;
            font-size: 20px;
            margin-bottom: 20px;
            font-weight: 700;
        }
        button {
            width: 150px;
            height: 40px;
            cursor: pointer;
            font-size: 16px;
            color: #fafafa;
            border: none;
            background: #757575;
            border-radius: 10px;
            transition: all 0.3s;
            &:hover {
                background: #b71c1c;
            }
        }
        span {
            display: block;
            color: ${(porps) => porps.color};
            font-size: 30px;
            position: absolute;
            bottom: 20px;
            right: 20px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;
export const GALLERYLODCONTAINER = styled.div``;
export const GALLERYINFOCONTAINER = styled.div`
    width: 100%;
    > .img-wrap {
        width: 100%;
        height: 1000px;
        background: #000;
        overflow: hidden;
        position: relative;
        &:hover {
            > img {
                opacity: 1;
            }
            > h2 {
                opacity: 0.8;
            }
        }
        > img {
            width: 100%;
            opacity: 0.8;
            transition: all 1s;
        }
        > h2 {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 100px;
            font-weight: 700;
            color: #fafafa;
            opacity: 0;
            transition: all 1s;
        }
    }
`;
