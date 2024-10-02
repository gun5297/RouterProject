import styled from 'styled-components';

export const BodyContainer = styled.div`
    margin-top: 80px;
    h3 {
        font-size: 30px;
        margin-bottom: 10px;
        + p {
            font-size: 20px;
            margin-bottom: 50px;
        }
    }

    span {
        display: inline-block;
        width: 200px;
        margin-right: 10px;
    }
    strong {
        font-weight: bold;
        color: tomato;
        margin-left: 15px;
    }
`;

export const FormViewContainer = styled.div`
    h3 {
        font-size: 30px;
        margin-bottom: 50px;
    }
`;
export const FormContainer = styled.form`
    p {
        margin-bottom: 30px;
    }
    label {
        display: inline-block;
        margin-right: 20px;
        font-size: 18px;
        width: 150px;
    }
    button {
        margin-right: 20px;
        width: 150px;
        height: 40px;
        border: none;
        background-color: #212121;
        color: #fafafa;
        cursor: pointer;
    }
    input[type='email'],
    input[type='password'],
    input[type='text'] {
        width: 500px;
        height: 40px;
        padding: 0 15px;
    }
`;
