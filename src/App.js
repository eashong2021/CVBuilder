import './App.css';
import React from 'react';
import {useState} from 'react';
import { FormPage } from './containers/FormPage';
import { Routes, Route, Link } from 'react-router-dom';
import Cv from './components/Cv/Cv';


function App() {

  const [ personDetails, setPersonDetails] = useState([
    {}
  ]);

  const addPersonDetails = (details) => {
    setPersonDetails([...personDetails, details]);
  }

  return (
    <>
    <nav>
      <Link to='/'>Form</Link>
      <Link to='/cv'>Generate CV</Link>
    </nav>
    
    
    <Routes>
      <Route 
      path='/'
      element={<FormPage  addPersonDetails={addPersonDetails}/>}
      />
      <Route 
      path='cv'
      element={<Cv personDetails={personDetails}/>}
      />
    </Routes>
      
  
    
    </>
    
  );
}

export default App;
