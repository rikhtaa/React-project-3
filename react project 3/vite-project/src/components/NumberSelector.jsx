import styled from "styled-components"
import { useState } from "react"
const NumberSelector = ({setError, error, selectedNumber, setSelectNumber}) => {
  const arrNumber = [1,2,3,4,5,6]
  //to select the numbers create 
  
  const numberSelectorHandler = (val)=>{
    setSelectNumber(val)
    setError("")
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p> 
      <div className="flex">
      {
        arrNumber.map((val,i)=>(
          <Box
          isSelected={val === selectedNumber}
          key={i} 
          onClick={()=> numberSelectorHandler(val)}>
            {val}
            </Box>
        ))
      }
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap:24px;
}
p{
  font-size: 24px;
  font-weight: 700px;
}
.error{
  color: red;
}
`
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=> (props.isSelected ? "black" : "white")};
  color: ${(props)=> (!props.isSelected ? "black" : "white")};
`