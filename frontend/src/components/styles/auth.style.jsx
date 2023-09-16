import { styled } from "styled-components";
export const AuthStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /* height: 530px; */
    margin: 30px;

    

    label {
        font-size: 20px;
        color: white;
        font-weight: 600;
        display: block;
        margin-bottom: 5px;
    }

    input {
        width:300px ;
        height :35px ;
        border-radius: .7em;
        border: none;
        outline: none;
        font-size: 16px;
        padding: 5px 10px;
    }

    button {
        width: 100px;
        height: 40px;
        font-size: 19px;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        background-color: lightgreen;
        margin-top: 15px;
    }
    div {
        margin: 6px 0;
    }

`