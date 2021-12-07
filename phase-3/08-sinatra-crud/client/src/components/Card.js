function Card({patient, patchPet, handleDelete}){
console.log(patient)
  return(
      <div>
        <h3>Name: {patient.name}</h3>
        <p>Owner: {patient.owner}</p>
        <p>Species: {patient.species}</p>
        <p>Phone Number: {patient.phone}</p>
        <p>Clinic:{patient.clinic.clinic_name}</p>
        {patient.active? <button onClick={()=> patchPet(patient)}>Deactivate Pet</button> : <p>Patient is no longer active</p>}
        <button onClick={() => handleDelete(patient.id)}>Delete Pet</button>
      </div> 
    )
}

export default Card;