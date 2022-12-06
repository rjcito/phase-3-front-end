import React, {useState} from "react";
const DaycareForm = ({ onAddDaycare }) => {
    const [name, setName] = useState("")
    const [city, setCity] =useState("")
    const [cost, setCost] = useState("")


    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleCityChange(event){
        setCity(event.target.value)
    }

    function handleCostChange(event){
        setCost(event.target.value)
    }

    const handleSubmit = (e)  => {
        e.preventDefault();
        fetch("http://localhost:9292/daycares", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                city: city,
                cost: cost,
            }),

        })
            .then((r) => r.json())
            .then((newDaycare) => onAddDaycare(newDaycare))
            
    } 
    
    return ( 
        <div>
            <h2>Create a Daycare, after hitting "Add Daycare", go to localhost:3000/daycares.</h2>
            <form onSubmit={handleSubmit}>
                <label>Daycare Name: </label>
                <input type="text" onChange={handleNameChange} value={name}/>
                <label>City:</label>
                <input type="text" onChange={handleCityChange} value={city}/>
                <label>Price:  </label>
                <input type="integer" onChange={handleCostChange} value= {cost}/>
                <button type="submit">Add Daycare</button>
            </form>
        </div>

     );
}
 
export default DaycareForm;