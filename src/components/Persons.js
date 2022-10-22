import React from 'react'

function Persons({FilteredNames, handleDelete}) {
    return (
        <div>
            {FilteredNames.map(
                (person) => {
                  return(
                    <div key={person.id}>{person.name} {person.number}<button onClick={handleDelete} value={person.id}>DELETE</button></div>
                  )
                }
                )
              }
        </div>
    )
}

export default Persons
