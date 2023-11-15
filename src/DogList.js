import React from 'react'

const DogList = ({dogs}) => {
    
    return (
        <div className="DogList">
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name} >{dog.name}</li>
                ))}
            </ul>
            
        </div>
        
    )
}

export default DogList