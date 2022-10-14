import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setMonsters(data)
        })
    }, [])



   
    // const handleClick = e => setUser('Edward');
    return ( 
        <div>
            {
                monsters.map((monster) => (
                    <div key={monster.id}>
                        <p>{monster.name}</p>
                    </div>
                ))
            }

        </div>
        
     );
}
 
export default Home;