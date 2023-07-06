import { useState, useEffect } from 'react'
import Pokedex from './components/Pokedex'
import './index.css'

function App() {
  
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json())
    .then(res => setData(res))
  }, [])

  function handleChange(e) {
    setValue(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
    fetchPokemon(value)
    setValue("")
}

function fetchPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(res => res.json())
        .then(setError(false))
        .then(res => setData(res))
        .catch(res => {
          setError(true)
          setData(null)
        })
}

  return (
    <>
      {(data || error) && <Pokedex data={data} error={error} />}
      <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <button className="search-btn">Search</button>
        </form>
    </>
  )
}

export default App
