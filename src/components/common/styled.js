import styled from 'styled-components';

export const HEADERCONTAINER = styled.header`
    width: 100%;
    background: #212121;
    opacity: 0.98;
    box-shadow: rgba(33, 35, 38, 0.2) 0px 10px 10px -10px;
    transition: all 0.3s;
    position: sticky;
    top: 0;
    z-index: 9999;
    backdrop-filter: blur(45px);
    &:hover {
        box-shadow: rgba(33, 35, 38, 0.9) 0px 10px 10px -10px;
        opacity: 1;
    }
`;
export const FOOTERCONTAINER = styled.footer`
    width: 100%;
    background: #212121;
    height: 150px;
`;
export const NAVCONTAINER = styled.div`
    width: 1400px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
    position: relative;
    .wrap {
        display: flex;
    }
    nav {
        ul {
            width: 100%;
            display: flex;
            li {
                &:not(:last-of-type) {
                    margin-right: 30px;
                }
                a {
                    color: #fafafa;
                    padding: 10px;
                    transition: all 0.3s;
                    font-size: 18px;
                    font-weight: 700;
                    &:hover {
                        color: #757575;
                    }
                }
            }
        }
    }
    .like {
        position: relative;
        i {
            font-size: 30px;
            color: #b71c1c;
            cursor: pointer;
        }
        span {
            color: #fafafa;
            position: absolute;
            right: -10px;
            top: -10px;
        }
    }
    .login {
        a {
            font-size: 18px;
            font-weight: 700;
            color: #fafafa;
            position: relative;
            &:not(:last-of-type) {
                margin-right: 30px;
                &::after {
                    content: '';
                    width: 2px;
                    height: 20px;
                    position: absolute;
                    right: -15px;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: #fafafa;
                    opacity: 0.5;
                }
            }
        }
    }
    .logout {
        font-size: 18px;
        font-weight: 700;
        color: #fafafa;
        cursor: pointer;
        margin-right: 30px;
    }
`;
export const SUBNAVCONTAINER = styled.div`
    width: 100%;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    transition: all 0.3s;
    &:hover {
        background: #f5f5f5;
    }
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1400px;
        height: 60px;
        margin: auto;
        li {
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                color: #b71c1c;
            }
            &:not(:last-of-type) {
                margin-right: 30px;
            }
        }
    }
`;
