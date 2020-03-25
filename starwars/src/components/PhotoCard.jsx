import React from "react";
import styled from 'styled-components'

const StyleDiv = styled.div`
width: 25%;
color: white;
background-color: rgba(255, 153, 138, 0.5);
text-align: center;
display: flex;
flex-direction: column;
padding: 2%;
margin-left: 35%;
border-radius: 20px;
margin-bottom: 1%;
`;

const PhotoCard = (props) => {
    return (
        <StyleDiv>
            <h2>Name: {props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
        </StyleDiv>
    )
}

export default PhotoCard;