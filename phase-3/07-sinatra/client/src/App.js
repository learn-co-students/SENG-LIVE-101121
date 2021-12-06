import {useState, useEffect} from 'react'

function App() {
 const [patients, setPatients] = useState([])

 useEffect(() => {
   fetch('http://localhost:9292/patients')
   .then(res => res.json())
   .then(setPatients)
 },[])
  return (
    <div className="App">
      {patients.map(p =>{ 
        return(
          <div>
            <h3>Name:{p.name}</h3>
            <p>Species:{p.species}</p>
            <p>Owner:{p.owner}</p>
            <p>Phone Number:{p.phone}</p>
          </div>
        )
})}
    </div>
  );
}

export default App;
