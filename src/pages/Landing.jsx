import React from 'react'
import styled from "styled-components";

const StyledBtn = styled.button`
 font-size: 1.5rem;
 background: #DC143C;
 color: white;
 padding: 20px;
 border-radius: 4rem;
 cursor: pointer;
`;

const Landing = () => {

  const handleClick = () => {
    console.log("Hello World, I was Clicked.");
    
  }

  return (
    <div>
      Landing
     <StyledBtn onClick={handleClick}>ClickMe</StyledBtn>  
    </div>
  )
}

export default Landing