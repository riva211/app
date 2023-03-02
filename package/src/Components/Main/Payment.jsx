import React ,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Payment({email}) {
  const data={
    email:'rshubham034@gmail.com'
  }
  const [price,setPrice]=useState()

  useEffect(() => {
      axios.post('http://localhost:5000/home/confirmbooking', data)
    .then(function (response) {
      console.log(response);
      setPrice(response.data.price)
    })
    .catch(function (error) {
      console.log(error);
    });
   
    console.log(data)
  }, )
  
  const handlePay=()=>{
    
    axios.post('http://localhost:5000/home/confirmbooking', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(data)
  }
  
  
  const navigateto = useNavigate()
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
        <a href="#" class="group relative block overflow-hidden lg:col-start-2 mt-6 border-blue3 border">


  <img
    src="https://www.shutterstock.com/image-vector/payment-options-concept-flat-style-600w-461607934.jpg"
    alt=""
    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div class="relative border border-gray-100 bg-white p-6">
   
    <h3 class="mt-4 text-lg font-medium text-gray-900">Total Amount</h3>

    <p class="mt-1.5 text-sm text-gray-700">{price}</p>

    <form class="mt-4 flex justify-center " >
      <button
        class="block rounded bg-yellow2 p-4 m-2 text-sm font-medium transition hover:scale-105"
    
      >
        Pay
      </button>
      <button
        class="block  rounded bg-yellow2 p-4 m-2 text-sm font-medium transition hover:scale-105"
        onClick={() =>{navigateto("/card")}}
      >
        Card
      </button>
      <button
        class="block  rounded bg-yellow2 p-4 text-sm m-2 font-medium transition hover:scale-105"
        onClick={() =>{navigateto("/upi")}}
      >
        UPI
      </button>
    </form>
  </div>
</a>

    </div>
  )
}

export default Payment