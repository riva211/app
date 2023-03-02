import React ,{useState}from 'react'
import './Date.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Dates({date,setDate,ids}) {

  return (
    <div>
      <DatePicker
      className="hidden"
      value={date}
      onChange={(e)=>setDate(e)}
      maxDate={new Date().setDate(15)}
      minDate={new Date()}
      id={ids}
      style={{width:'0px',display:'none'}}
      />
       <label htmlFor={ids} className="bg-gray-50 border font-semibold border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{date.toLocaleDateString()}</label>   
    </div>
  )
}

export default Dates