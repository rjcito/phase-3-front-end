import React, { useEffect, useState } from 'react'

const DaycareReviews = ({ daycareId }) => {
    const [daycare, setDaycare] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:9292/daycares/${daycareId}`)
            .then ((r) => r.json())
            .then((daycare) => setDaycare(daycare))
    }, [daycareId]);

    if (!daycare) return <h2>Loading daycare data...</h2>

    return ( 
        <div>
            <h2>{daycare.name}</h2>
            <p>City: {daycare.city}</p>
            <h4>Cost: {daycare.cost}</h4>
            <h5>Reviews:</h5>
        {daycare.reviews.map((review) => (
            <div>
                <h5>{review.rating}</h5>
                <p>Comment: {review.comment}</p>
            </div>
            
        ))}
        </div>




     );
}
 
export default DaycareReviews;