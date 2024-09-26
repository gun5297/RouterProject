import styled from 'styled-components';

export const HEADERCONTAINER = styled.header`
    width: 100%;
    background: #212121;
    box-shadow: rgba(33, 35, 38, 0.2) 0px 10px 10px -10px;
    transition: all 0.3s;
    position: relative;
    z-index: 100;
    &:hover {
        background: #424242;
        box-shadow: rgba(33, 35, 38, 0.9) 0px 10px 10px -10px;
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
`;
export const SUBNAVCONTAINER = styled.div`
    width: 100%;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
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
