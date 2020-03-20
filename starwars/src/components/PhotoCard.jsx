import React from "react";

const PhotoCard = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
        </div>
    )
}

export default PhotoCard;