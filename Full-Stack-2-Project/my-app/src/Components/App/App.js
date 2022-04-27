// import logo from '../../logo.svg';
import './App.css';
import Admin from '../Admin/Admin';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from '../Home/Home';
import { useState } from 'react';

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  const [isGuest, setIsGuest] = useState(false);


  const childToParent = (childData) => {
    setIsAdmin(childData.isAdmin);
    setIsGuest(childData.isGuest);
    // console.log("APP!!!!!!!")
    // console.log(childData);
  }


  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
                    <Route path="/" element={<Admin isAdmin={isAdmin} isGuest={isGuest} childToParent={childToParent}/>} exact />
                    <Route path="/home" element={<Home isAdmin={isAdmin} isGuest={isGuest} childToParent={childToParent}/>} />
                    <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;