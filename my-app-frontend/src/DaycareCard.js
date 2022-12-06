import React, {useState} from 'react'
// import EditReview from './EditReview';
// import DaycareReviews from './DaycareReviews';

const DaycareCard = ({daycare, onDeleteDaycare }) =>{
    const [comment, setComment] = useState("")
    console.log(daycare)

    function handleDeleteClick() {
        fetch(`http://localhost:9292/daycares/${daycare.id}`,{
            method: "DELETE",
        })
        .then((r) => r.json())
        onDeleteDaycare(daycare.id);
    }

    function handleEditReview(e) {
        e.preventDefault()
           fetch(`http://localhost:9292/daycares/${daycare.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment:comment,

            }),
        })
        .then((r)=> r.json())
        .then((updatedReview) => setComment(updatedReview));
    }
    return(
    
           
        <div key = {daycare.id}>
            <h3>{daycare.name}</h3>
            {daycare.reviews.map((review) => (
                <div key={daycare.id}>
                    Review: {review.comment}
                    <button onClick={handleEditReview}>Edit Review</button>
                </div>
            ))}
            <button onClick = {handleDeleteClick}>Delete Daycare</button> 
        </div>
                
    
            
              
    )
    

}

    

export default DaycareCard;