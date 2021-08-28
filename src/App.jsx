import React, {useState, useEffect} from 'react';
import getCountries from './services/getCountries';
import CountriesList from './components/CoutriesList';

function App(){

  const [input, setInput]= useState("")
  const [continent, setContinent]= useState("")
  const [countries, setCountries] = useState([])
  
  useEffect(()=> {
    getCountries(continent)
    .then(data=>setCountries(data))
  }, [continent])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setContinent(input)
  }

  

  return(
    <div>
      <p>{continent}</p>
      <form onSubmit={handleSubmit}  >
      <input type = "text" onChange={handleInput} value={input}  />
      <button>Buscar</button>
      </form>
      <CountriesList countrie={countries} ></CountriesList>
      {countries.map(countrie => {
        return(
          <div>
          <h1 key={countrie.alpha2Code}>{countrie.name}</h1>
          <p>{countrie.capital}</p>
          <img src={countrie.flag} width= "30"></img>
          </div>
        )
      })}
    </div>
  )
}

export default App;