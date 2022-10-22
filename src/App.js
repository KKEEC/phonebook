import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const handleNameChange = (event) => {
  event.preventDefault()
  setNewName(event.target.value)  
} 


const addName = (e) => {
  e.preventDefault()
  const person = {name: newName}
  setPersons([...persons,person])
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(
        (person) => {
          return(
            <div key={person.name}>{person.name}</div>
          )
        }
        )
      }
    </div>
  )
}

export default App