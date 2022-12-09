import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
// import EditDaycareForm from './EditDaycareForm';
import DaycareList from './DaycareList';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import DaycareReviews from './DaycareReviews';
import DaycareForm from './DaycareForm';
import DaycareCard from './DaycareCard';
import EditDaycareForm from './EditDaycareForm';
import AddReview from './AddReview';

// import DaycareCard from './DaycareCard'
// import EditReview from './EditReview';


function App() {
  const [daycares, setDaycares] = useState([]);
  const [reviews, setReviews] = useState([])

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
  
  function handleUpdateDaycare(updatedDaycare) {
    // debugger;
    const updatedDaycares = daycares.map((daycare) => {
      if (daycare.id === updatedDaycare.id) {
        return updatedDaycare;
      } else {
        return daycare;
      }
    });
    setDaycares(updatedDaycares);
  }

  function handleAddReview(newReview){
    const updatedReviews = daycares.map((daycare) => {
      if(daycare.id === newReview.id){
        return newReview;
      }else{
        return daycare
      }
    })
    // setReviews([...reviews, newReview]);
    setReviews(updatedReviews)

  }
  
  return (
    <Router>
      {/* /reviews/new  */}

      <Navbar/>
        <Routes>
          <Route  exact path="/" element={<Home />} ></Route>
          <Route exact path="/daycares" element={<DaycareList daycares={daycares} onDeleteDaycare = {handleDeleteDaycare} />}></Route>
          <Route exact path="daycares/new" element={<DaycareForm onAddDaycare={handleAddDaycare} />}></Route>
          <Route exact path="/daycares/:id/edit"  element={<EditDaycareForm daycares={daycares} onEditDaycare={handleUpdateDaycare}  /> }></Route>
          <Route exact path="/daycares/:id" element = {<DaycareCard />}></Route>
          <Route exact path="/daycares/:id/reviews/new" element = {<AddReview onAddReview={handleAddReview} daycares={daycares}/>}></Route>
        </Routes>
    
    </Router>

  );
}

export default App;