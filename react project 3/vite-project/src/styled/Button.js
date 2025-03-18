import styled from "styled-components"

export const Button = styled.button`
color: white;
padding: 10px 18px;
background-color: #000000;
border-radius: 5px;
width: 220px;
border: none;
font-size: 16px;
cursor: pointer;
transition: transform 0.3s ease-in-out;

&:hover{
  background-color: white;
  transform: scale(1.1);
  border: 1px solid black;
  color: black;
}
`
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
 &:hover{
  background-color: black;
  transform: scale(1.1);
  border: 1px solid transparent;
  color: white;
}
`