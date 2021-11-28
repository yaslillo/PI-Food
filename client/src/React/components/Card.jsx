import React from 'react';

export default function Card ({name,image,resume,diet,score}) {
    return (

        <div>
            <h3>{name}</h3>
            <h5>{resume}</h5>
            <h5>{diet}</h5>
            <h5>{score}</h5>
            <img src={image} alt="img not found" width="200px" height="250"/>
        </div>
                
    
    )
}







