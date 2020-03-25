import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

function PhotoList() {

    const [photos, setPhotos] = useState ([]);
    useEffect (() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response.data.results);
                setPhotos(response.data.results);


            })
            .catch(error => {
                console.log("somethin' went wrong, bucko", error);
            })
    }, []);

    return(
        <div className="photo">
            {photos.map (photo => { 
                return <PhotoCard name={photo.name}
                birth_year={photo.birth_year}/>
                
            })}
        </div>
    )
}

export default PhotoList