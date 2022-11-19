import React, { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage.js';
import tachyons from 'tachyons';
import SignInForm from './pages/SignIn/SignInForm';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Register from './pages/Register';





const App = () =>  {
  
  const  navigate = useNavigate();
  let id = sessionStorage.getItem('id');
  
  const [rank , setrank] = useState('');
  
  const NavigateToSignin = () => {
    navigate('/')
  }

  

  
  const NavigateToProfilePage = (id)=>{
    navigate(`/Profile/:${id}`, {replace: true})
  }


  
  
  return  (
      
   
    <> 
    <Routes>
      <Route path='/' element={<SignInForm setrank={setrank}   NavigateToProfilePage={NavigateToProfilePage} />} />
      <Route path="/Register" element={<Register NavigateToSignin={NavigateToSignin}/>}/>
      <Route path={`/Profile/:${id}`} element={<Homepage setrank={setrank} rank={rank} NavigateToSignin={NavigateToSignin} /> }/>
    </Routes>
    </>   
  );
  }


export { App};
