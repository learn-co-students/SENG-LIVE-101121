import {useState} from 'react'
function CreateForm({postPatient, clinics}){
    const [formData, setFormData] = useState({
        name:'',
        species:'',
        age: '',
        owner:'',
        phone: '',
        clinic_id:'',
        active: true
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postPatient(formData)
    } 
    return(
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label>
            Species:
            <input type="text" name="species" value={formData.species} onChange={handleChange}/>
            </label>
            <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange}/>
            </label>
            <label>
            Owner:
            <input type="text" name="owner" value={formData.owner} onChange={handleChange}/>
            </label>
            <label>
            Phone number:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
            </label>
            <label>
            Clinic:
           <select name="clinic_id" onChange={handleChange}>
               <option>Select A Clinic</option>
               {clinics.map(c => <option value={c.id}>{c.clinic_name}</option>)}
           </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateForm
