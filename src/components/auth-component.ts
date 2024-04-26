import styled from "styled-components";

export const Wrapper = styled.div`
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0;
`;
export const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap:10px;
    width: 100%;
`;
export const Input = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
    margin : 5px;
    &[type="submit"] {
        cursor:pointer;
        &:hover {opacity:0.8}
    }
`;
export const Title = styled.h1`
    font-size: 42px;
    margin-bottom: 20px;
`;

export const Error = styled.span`
    color: tomato;
    font-weight: 600;
    padding: 10px 10px;
`;

export const Switcher = styled.span`
    margin-top:20px;
    a{color:#fffff}
`;

export const Button = styled.button`
    width:100px;
    height:30px;
    font-size:10px;
`;
