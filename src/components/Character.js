// Write your Character component here
import React from 'react'
import styled from "styled-components"

const StyledDiv = styled.div`
display:flex;
justify-content:center;
justify-content: space-between;
align-items: center;
border: 2px solid black;
margin:2%;
font-size:1rem;
`;
const StyledH1 = styled.h1`
margin-left:2%;
font-family:'Courier New', Courier, monospace;
color:purple;
`;
const StyledH2 = styled.h1`
border:1px solid black;
padding: 2%;
margin-right:2%;
border-radius:20px 50px;
background-color:grey;
color:purple;
`;

export default function Character(props) {
    const {data} = props;
    return (
        <StyledDiv>
            <StyledH1>{data.name}</StyledH1>
            <StyledH2>{data.birth_year}</StyledH2>
        </StyledDiv>
    )
}
