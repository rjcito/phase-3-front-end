import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const AddReview = ({ onAddReview, daycares }) => {
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const { id } = useParams()
    const daycare = daycares.find((daycare) => daycare.id === parseInt(id))

    function handleRatingChange(event){
        setRating(event.target.value)
    }


    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
            fetch(`http://localhost:9292/daycares/${daycare.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    rating: rating,
                    comment: comment,

                }),

            })
            .then((r) => r.json())
            .then((newReview) => onAddReview(newReview));

    }


    

    return ( 
        <div>
            <h2>Create a review.</h2>
            <form onSubmit={handleSubmit}>
                <label>Rating:</label>
                <input type ="text" onChange = {handleRatingChange} value={rating}></input>
                <label>Add comment:</label>
                <input type ="text" onChange = {handleCommentChange} value={comment}></input>
                <button type ="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>


    );
}
 
export default AddReview;