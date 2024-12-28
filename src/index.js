import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Layout/header';
import Student from './Components/Student/Student';
import Footer from './Layout/Footer';
import Mainbody from './Mainbody';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div style={{backgroundColor:"black",color:"grey"}}>
       <Header/>
       <div className='px-4'>
       <Mainbody/>
       </div>
      
      
      <Footer/>
      
  </div>
  
);

