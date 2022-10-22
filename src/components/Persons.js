import React from 'react'

function Persons({FilteredNames}) {
    return (
        <div>
            {FilteredNames.map(
                (person) => {
                  return(
                    <div key={person.name}>{person.name} {person.number}</div>
                  )
                }
                )
              }
        </div>
    )
}

export default Persons
