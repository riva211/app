import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Upi from './Components/Main/Upi';
import Header from './Components/Header/Header';
import Filter from './Components/Sidebar/Filter';
import Bookings from './Components/Main/Bookings';
import Create from './Components/Main/Create';
import Payment from './Components/Main/Payment';
import Success from './Components/Main/Success';
import Card from './Components/Main/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [email ,setEmail]=useState('')
  return (
   <div>
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Filter/>}/>
      <Route path='/create' element={<Create email={email} setEmail={setEmail}/>}/>
      <Route path='/payment' element={<Payment email={email}/>}/>
      <Route path='/cash' element={<Success/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/upi' element={<Upi/>}/>
    </Routes>
     </BrowserRouter>
    
    </>
    
     {/* <Payment/> */}
     
{/* <Card/>    */}
    {/* <Filter/> */}
    {/* <Bookings/> */}
  {/* <Create/> */}
    {/* <Upi/> */}
   </div>
  );
}

export default App;
