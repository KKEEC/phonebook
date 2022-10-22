import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[searchName, setSearchName] = useState('')

const handleNameChange = (event) => {
  event.preventDefault()
  setNewName(event.target.value)  
} 
const handleNumberChange = (event) => {
  event.preventDefault()
  setNewNumber(event.target.value)  
} 
const handleSearch = (event) => setSearchName(event.target.value)

const addName = (e) => {
  e.preventDefault()
  
  if ((persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase()))){
    alert(`${newName} is already added ` )
  }
  else{
    const person = {name: newName, number: newNumber}
    setPersons([...persons,person])
  }
}
const FilteredNames =  persons.filter(person => person.name.toLowerCase().includes(searchName))

  return (
    <div>
        <h2>Phonebook</h2>
        <div>filter shown with <input onChange={handleSearch}/></div>
            <form onSubmit={addName}>
              <div>
                name: <input onChange={handleNameChange}/>
              </div>
              <div>
                number: <input onChange={handleNumberChange}/>
              </div>
              <div>
                <button type="submit">add</button>
              </div>
            </form>
        <h2>Numbers</h2>
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

export default App