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
    .news-inner {
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
    width: 1400px;
    height: 780px;
    margin: 80px auto;
    position: relative;
    border-radius: 50px;
    box-shadow: rgba(33, 35, 38, 0.4) 0px 10px 10px -10px;
    overflow: hidden;
    .img-wrap {
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
export const NEWSDETAILSCONTAINER = styled.div`
    width: 100%;
    .img-wrap {
        overflow: hidden;
        width: 1000px;
        margin: auto;
        margin-bottom: 80px;
        img {
            height: 100%;
        }
    }
    p {
        width: 800px;
        margin: auto;
        margin-bottom: 20px;
        font-size: 18px;
        word-break: keep-all;
        &:last-of-type {
            margin-bottom: 80px;
        }
    }
    .tag {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 80px;
        .tag-span {
            display: block;
            margin-bottom: 10px;
        }
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0px 10px;
            span {
                display: block;
            }
            button {
                width: 50px;
                height: 40px;
                border: none;
                background-color: #616161;
                color: #fff;
                cursor: pointer;
                &:hover {
                    background: #b71c1c;
                }
            }
        }
    }
    form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 0px 10px;
        span {
            width: 5%;
            display: block;
        }
        input {
            width: 85%;
            box-sizing: border-box;
            height: 40px;
        }
        button {
            width: 10%;
            height: 40px;
            border: none;
            background-color: #616161;
            color: #fff;
            cursor: pointer;
            &:hover {
                background: #b71c1c;
            }
        }
    }
    .not-login {
        width: 100%;
        height: 100px;
        margin-bottom: 80px;
        background-color: #e0e0e0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        span {
            display: block;
            margin-bottom: 5px;
        }
        a {
            display: block;
            background: #616161;
            padding: 5px 20px;
            color: #fff;
            font-size: 12px;
            &:hover {
                background: #b71c1c;
            }
        }
    }
`;
