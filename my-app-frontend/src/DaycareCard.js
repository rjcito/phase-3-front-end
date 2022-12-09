import React from 'react'
import EditDaycareForm from './EditDaycareForm';
import { NavLink } from "react-router-dom";

// import EditReview from './EditReview';
// import DaycareReviews from './DaycareReviews';

const DaycareCard = ({daycare, onDeleteDaycare, onEditDaycare }) =>{

    const[isEditing, setIsEditing] = ("false")
    

    function handleDeleteClick() {
        fetch(`http://localhost:9292/daycares/${daycare.id}`,{
            method: "DELETE",
        })
        .then((r) => r.json())
        onDeleteDaycare(daycare.id);
    }



    // function handleEditDaycare (updatedDaycare) { 
    //     setIsEditing(false)
    //     onEditDaycare(updatedDaycare)


    // }
        


    return(
        <li>
            {isEditing ? (

            
            <div key = {daycare.id}>
            <h1>Daycare Name: {daycare.name}</h1>
            <h2>Price: {daycare.cost} / week</h2>
            <h3>Located in: {daycare.city}</h3>
            <button onClick = {handleDeleteClick}>Delete Daycare</button>
            <NavLink to={`/daycares/${daycare.id}/edit`}>Edit Daycare</NavLink>
            <NavLink to={`/daycares/${daycare.id}/reviews/new`}>Add Review</NavLink>

            
            {daycare.reviews.map((review) => (
                <div key={daycare.id}>
                    Review: {review.comment}
                </div>
            ))}
        
        </div>
            ) : (
            <EditDaycareForm />    )}
        </li>
        
                    
    )
}

    

export default DaycareCard;