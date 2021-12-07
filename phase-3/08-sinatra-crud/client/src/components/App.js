import {useState, useEffect} from 'react'
import Card from './Card'
import CreateForm from './CreateForm'
import '../App.css';

function App() {
  const [patients, setPatients] = useState([])
  const [clinics, setClinics] = useState([])

  useEffect(()=> {
  //Gets patients and clinics
    fetch('http://localhost:9292/patients')
    .then(res => res.json())
    .then(setPatients)
    
    fetch('http://localhost:9292/clinics')
    .then(res => res.json())
    .then(setClinics)
  },[])

  //Creates a Patient 
  const postPatient = (patient) => {
    fetch('http://localhost:9292/patients',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(patient)
    })
    .then(res => res.json())
    .then(newPatient => {
      setPatients([newPatient,...patients])
    })
  }
//patches patient
  const patchPet = (patient) => {
    fetch(`http://localhost:9292/patients/${patient.id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...patient, active:false})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPatients(patients.map(p => {
        if(patient.id === data.id){
          return data
        } else {
          return p
        }
      }))
    })
  } 
//Deletes patient
  const handleDelete = (id) => {
    fetch(`http://localhost:9292/patients/${id}`,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      setPatients(patients.filter(p => p.id !== id))
    })
  }
  return (
    <div className="App">

      <div>
      <CreateForm postPatient={postPatient} clinics={clinics}/>
      {patients.map(p => <Card patient={p} patchPet={patchPet} handleDelete={handleDelete} key={`${p.id}${p.name}`}/>)}
      </div> 
    </div> 
  );
}

export default App;
