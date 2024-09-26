import styled from 'styled-components';

export const VISUALCONTAINER = styled.div`
    width: 100%;
    margin-bottom: 80px;
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
        margin-bottom: 30px;
    }
    .inner {
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
