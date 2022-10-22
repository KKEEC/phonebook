import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[searchName, setSearchName] = useState('')

  useEffect(() =>{
    axios.get('http://localhost:3001/persons')
    .then( response =>
      setPersons(response.data)
    )
  },[])

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
    axios.post('http://localhost:3001/persons',person)
    .then(
      setPersons([...persons,person])
    )
  }
}
const FilteredNames =  persons.filter(person => person.name.toLowerCase().includes(searchName))

  return (
    <div>
        <h2>Phonebook</h2>
            <Filter handleSearch={handleSearch}/>
            <PersonForm
              addName={addName}
              handleNameChange={handleNameChange}
              handleNumberChange={handleNumberChange}
            />
        <h2>Numbers</h2>
        <Persons FilteredNames={FilteredNames}/>
              
    </div>
  )
}

export default App