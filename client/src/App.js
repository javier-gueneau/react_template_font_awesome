import './App.css';
import React,{useState} from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useNavigation } from 'react-router-dom';
import Dashboard_screen from './screens/Dashboard_screen';


function App() {


  
  return (
    <div className="App">

<Routes>
              
              
                <Route path='/' element={<Dashboard_screen/> } />


          </Routes>
      


      </div>
  );
}

export default App;
