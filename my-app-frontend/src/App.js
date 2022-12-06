import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
// import ReviewForm from './ReviewForm';
import DaycareList from './DaycareList';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DaycareReviews from './DaycareReviews';
import DaycareForm from './DaycareForm';
// import DaycareCard from './DaycareCard'
// import EditReview from './EditReview';


function App() {
  const [daycares, setDaycares] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/daycares')
      .then(res => {
        return res.json();
      })
      .then(daycares => {
        
        setDaycares(daycares);
        
        
        
      })
  }, [])

  function handleAddDaycare(newDaycare){
    setDaycares([...daycares, newDaycare]);
  }

  function handleDeleteDaycare(id){
    const updatedDaycares = daycares.filter((daycare) => daycare.id !==id);
    setDaycares(updatedDaycares) 
  }
  
  // function handleUpdateReview(updatedReview) {
  //   const updatedReviews = reviews.map((review) => {
  //     if (review.id === updatedReview.id) {
  //       return updatedReview;
  //     } else {
  //       return review;
  //     }
  //   });
  //   setReviews(updatedReviews);
  
  return (


  

    
    
    

    <Router>
    
      <Navbar/>
        <Routes>
          <Route  exact path="/" element={<Home />} ></Route>
          <Route exact path="/daycares" element={<DaycareList daycares={daycares} onDeleteDaycare = {handleDeleteDaycare} />}></Route>
          <Route exact path="daycares/new" element={<DaycareForm onAddDaycare={handleAddDaycare} />}></Route>
          {/* <Route exact path="/reviews/:id/edit" element={<EditReview onUpdateReview={handleUpdateReview} reviews={reviews} /> }></Route> */}
          <Route exact path="/daycares/:id" element = {<DaycareReviews />}></Route>
        </Routes>
    
    </Router>

  );
}

export default App;