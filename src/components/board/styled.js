import styled from 'styled-components';

export const BOARDLISTCONTAINER = styled.ul`
    width: 100%;
    margin-bottom: 80px;
`;
export const BOARDITEMCONTAINER = styled.li`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 20px;
    border: 1px solid #757575;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    &.active {
        background: #616161;
        color: #fafafa;
        &:hover {
            background: #424242;
        }
    }
    i {
        font-size: 30px;
    }
    &:hover {
        background: #f5f5f5;
    }
`;
export const BOARDPAGINGCONTAINER = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    a {
        padding: 0 10px;
        position: relative;
        &:hover::after {
            content: '';
            width: 50%;
            height: 2px;
            background: #424242;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
        }
    }
`;
export const BOARDETAILSCONTAINER = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    background: #f5f5f5;
    margin-bottom: 20px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;
