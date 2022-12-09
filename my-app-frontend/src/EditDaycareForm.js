import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
const EditDaycareForm = ({onEditDaycare, daycares}) => {
    const [name, setName] = useState("")
    const[city, setCity] = useState("")
    const[cost, setCost] = useState("")
    const { id } = useParams()
    const daycare = daycares.find((daycare) => daycare.id === parseInt(id))




    function handleNameChange(event){
        setName(event.target.value)
    }


    function handleCityChange(event){
        setCity(event.target.value)
    }


    function handleCostChange(event){
        setCost(event.target.value)
    }

    function handleSubmit(e) {
        // debugger;
        e.preventDefault()
           fetch(`http://localhost:9292/daycares/${daycare.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                city: city,
                cost: cost,

            }),
        })
        .then((r)=> r.json())
        .then((updatedDaycare)=> onEditDaycare(updatedDaycare));
        // .then((updatedDaycare) => onEditDaycare(updatedDaycare));
        // setIsEditing(true)
    }

    if (!daycare) return <h2>Loading daycare data...</h2>


    return ( 


        <form>
            {/* <p>Daycare Name: {daycare.name}</p> */}
            <input type ="text" placeholder={daycare.name} onChange = {handleNameChange} value={name}></input>
            <input type ="text" placeholder = {daycare.city} onChange = {handleCityChange} value={city}></input>
            <input type ="text" placeholder = {daycare.cost} onChange = {handleCostChange} value={cost}></input>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>




     );
}
 
export default EditDaycareForm;