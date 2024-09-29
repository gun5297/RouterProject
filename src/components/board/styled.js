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
    border: 1px solid #000;
    margin-bottom: 10px;
    i {
        font-size: 30px;
    }
    &:hover {
        background: #eeeeee;
    }
`;
