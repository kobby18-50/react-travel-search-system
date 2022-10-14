import { useEffect, useState } from "react";
import CardList from "./components/card-list/CardList";
import './search.style.css'


function App() {
  const [monsters, setMonsters] = useState([])
  const [searchValue, setSearchValue] = useState('')
  // const [isLoading, setIsLoading] = useState(true)
  
  

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
      return res.json()
    })
    .then(data => {
      setMonsters(data)
    })
  },[])

  // search function
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchValue.toLowerCase()))

  const handleOnChange = e => setSearchValue(e.target.value)
  

  return (
    <div className="bg-gradient-to-r from-cyan-700 pt-5">
      <div className="text-center">
      <h1 className="text-6xl font-mono">Monster Rollerdex</h1>
      <input type="search" className="p-2 my-4" placeholder="Search monster" value={searchValue} 
      onChange = {handleOnChange} />
      </div>

      <CardList monsters = {filteredMonsters}/> 
      {/* <p>{searchValue}</p>      */}
    </div>
  );
}

export default App;
