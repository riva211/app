import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function Success() {
  const navigation = useNavigate()
  useEffect(()=>{
      setTimeout(() => {
        navigation('/')
      }, 5000);
  })
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='border-yellow1 border-2  p-9 m-7 font-bold text-2xl text-blue3'>
        <i class="fa-sharp fa-solid fa-square-check"></i> Payment Done Successfully
        </div> 
      
        </div>
  )
}

export default Success