import styled from 'styled-components';


export const StyledNavigation = styled.div`
    width: 100% ;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    `

export const Gift = styled.div`
    width: 100%;
    /* height: 45/0px; */
    margin-right: 100px;
    margin-top: 20px;
    text-align: end;
    /* border: 1px solid red; */
    div {
        width: 100%;
        height: 100%;
    }

    img {
        width: 280px;
        height: 200px;

    }
`

export const StyledMarquee = styled.div`
    width: 300px;
    height: 120px;
    border-radius: 10px;
    border: none;
    margin: 0 50px;
    padding: 10px;
    background-color: white;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

`

export const StyledFooter = styled.div`
    width: 100%;
    height: 400px;
    background-color: black;
    color: white;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SocialMediaAddress = styled.div`
    width: 210px;
    margin: 0px 100px;
    ul {
        list-style: none;
    }
    li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 30px;
        margin: 10px 0;
        cursor: pointer;
    }
    span {
        margin-left:15px;
    }
`

export const TakeFeedback = styled.div`
    div {
        margin: 5px 0;
        font-size: 20px;
    }
    input {
        border: none;
        border-radius: 5px;
        width: 100%;
        height: 35px;
        outline: none;
        padding: 5px;
        font-size: 17px;
    }
    textarea {
        border: none;
        resize: none;
        border-radius: 5px;
        outline: none;
        padding: 5px;
        font-size: 17px;
    }

    button {
        width: 90px;
        height: 30px;
        border: none;
        border-radius: 5px;
        text-align: center;
        margin-left: 90px;
    }

`