import styled from 'styled-components';

export const VISUALCONTAINER = styled.div`
    width: 100%;
    .img-wrap {
        height: 600px;
        overflow: hidden;
        position: relative;
        background-color: #000;
        img {
            position: absolute;
            left: 0;
            top: 50%;
            transition: all 1s;
            transform: translateY(-50%);
            opacity: 0.7;
            &:hover {
                opacity: 0.9;
            }
        }
    }
`;
export const NEWSCONTAINER = styled.div`
    width: 100%;
    h2 {
        text-transform: uppercase;
        font-size: 50px;
        text-align: center;
        margin: 80px 0px 30px 0px;
    }
    .inner {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #212121;
        .img-wrap {
            width: 65%;
            img {
                width: 100%;
            }
        }
        .content-wrap {
            width: 35%;
            color: #fafafa;
            padding: 100px;
            box-sizing: border-box;
            h3 {
                font-size: 40px;
                margin-bottom: 20px;
                font-weight: 700;
                line-height: 1.4;
            }
            > p {
                word-break: keep-all;
                font-size: 19px;
                margin-bottom: 30px;
            }
            button {
                background: #616161;
                padding: 15px 25px;
                font-size: 18px;
                color: #fff;
                border: none;
                cursor: pointer;
                transition: all 0.3s;
                font-weight: 500;
                border-radius: 5px;
                &:hover {
                    background: #b71c1c;
                }
            }
        }
    }
`;
export const MAKEPORSHCECONTAINER = styled.div`
    position: relative;
    .img-wrap {
        width: 100%;
        height: 1000px;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    ul {
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(33, 35, 38, 0.4) 0px 10px 10px -10px;
        li {
            width: 100px;
            height: 100px;
            transition: all 0.3s;
            opacity: 0.8;
            &:hover {
                transform: scale(1.02);
                opacity: 1;
                cursor: pointer;
            }
        }
    }
`;
