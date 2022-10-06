import styled from "styled-components";

const Header = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-content: center;
justify-content: space-between; 
padding: 40px 80px 0px 80px;
`

const BemVindos = styled.h3`
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #5D9040;

`
 const Functionalities =styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
justify-items: space-between; 
 `
 const Functionality =styled.button`
margin: 0px 16px; 
 color: #9C9C9C;
 font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
border: 0px;`

const GreenFunctionality =styled.button`
margin: 0px 16px; 
 color: #5D9040;
 font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
border: 0px;
`

const Image = styled.div`
display: flex;
flex-direction: row;
align-content: top;
justify-content: center; 
`

export {
    BemVindos, Functionalities, Functionality, Header, Image, GreenFunctionality
}

