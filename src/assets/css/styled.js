import styledComponents from "styled-components"


const Container = styledComponents.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding-top: 90px 
`
const Hover = styledComponents.div`
&:hover{
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.005);
    cursor: pointer;
   };`
const Input = styledComponents.input`

width: 60vw;
height: 70px;

background: #FFFFFF;
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 12px;
font-family:  'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #9C9C9C;
margin-top:40px;

::placeholder { 
    padding-left: 10px;
  opacity: 0.8; }


${Hover}:hover & {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`


const ConfirmButton = styledComponents.button`
width: 18vw;
height: 70px;
background-color: #5D9040;
border-radius: 12px;
margin-top:40px;
border-line:0px;

font-family:  'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;

${Hover}:hover & {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`



export {
    Container,
    Input, 
    ConfirmButton, Hover
}

