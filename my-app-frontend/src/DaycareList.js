import React from 'react';
import DaycareCard from './DaycareCard';

const DaycareList = ({ daycares, onDeleteDaycare  }) => {

  console.log(daycares)
  
    
    // const reviewCards = reviews.map(review => <ReviewCard key={review.id} review={review} onDeleteReview={onDeleteReview}/>)
    // console.log("reviews:", reviews)
    // console.log(reviews.daycares.name)
    return ( 
        <div>
            <h1>Displaying Daycares </h1>
            <ul>
              {daycares.map((daycare) => (
              <DaycareCard
                key = {daycare.id}
                daycare = {daycare}
                onDeleteDaycare = {onDeleteDaycare}
                
                // daycare={review.daycare.name}
                // onDeleteReview = {onDeleteReview}
                // onUpdateReview = {onUpdateReview}
                
              />
            ))}
                
          </ul>
        </div>
     


     );
}
 
export default DaycareList;