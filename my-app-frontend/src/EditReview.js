import React, {  useState } from "react";
// import DaycareCard from "./DaycareCard";
//this is for a commit that i am testing
const EditReview = ({ review }) => {
    const [comment, setComment] = useState("")
    console.log(review)
    
  
    function handleFormSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              comment: comment,
              
              
              

            }),
          })
            .then((r) => r.json())
            .then((updatedReview) => setComment(updatedReview));

        }
        
        return ( 
            <form onSubmit={handleFormSubmit}>
                <input
                    type = "text"
                    value={comment}
                    onChange={(e)=> setComment(e.target.value)}
                    

                />
                <input type="submit" value="Save" />

            </form>
        
        );
    }
    

export default EditReview;