import styled from 'styled-components';

export const LIKELISTCONTAINER = styled.ul`
    width: 100%;
    padding: 0px 100px 100px 100px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    .noCon {
        h3 {
            font-size: 30px;
            margin-bottom: 30px;
        }
        a {
            font-size: 20px;
            padding: 20px;
            background-color: #757575;
            color: #fafafa;
            border-radius: 10px;
            transition: all 0.3s;
            &:hover {
                background: #b71c1c;
            }
        }
    }
`;
export const LIKEITEMCONTAINER = styled.li`
    width: 19.2%;
    box-sizing: border-box;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #212121;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transition: all 0.3s;
    position: relative;
    cursor: pointer;
    &:not(:nth-child(5n)) {
        margin-right: 1%;
    }
    &:hover {
        transform: scale(1.01);
        .img-wrap {
            opacity: 1;
        }
    }
    .img-wrap {
        width: 100%;
        height: 300px;
        overflow: hidden;
        opacity: 0.8;
        transition: all 0.3s;
        img {
            width: 100%;
            min-height: 300px;
        }
    }
    .text-wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px;
        box-sizing: border-box;
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
            color: ${(props) => props.color};
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
