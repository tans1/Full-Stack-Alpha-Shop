import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin: 0 100px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledButton = styled.button`
    border: none;
    background-color: #0ead69;
    color: white;
    font-size: 20px;
    height: 35px;
    width: 90px;
    border-radius: 10px;
`

export const StyledText = styled.div`
    color: ${(prop) => prop.color};
    font-size: ${(prop) => prop.size};
    font-weight: 600;
    margin: 0 60px;
`

export const StyledTitle = styled.div`
    color: white;
    font-size: 50px;
    font-weight: bolder;
    margin:100px 20px 20px 60px;


    `

