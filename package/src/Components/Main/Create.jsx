import React,{useState} from 'react'
import Header from '../Header/Header'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Create({email,setEmail}) {
  const navigateto = useNavigate()
  // const email = "rshubham034@gmail.com"
    // const date = "2023-02-22";
    // const time = "10:00:00";
    // const duration = 7;
    const [date ,setdate]=useState()
    const [time ,settime]=useState('')
    const [duration ,setduration]=useState('')
    const [roomType ,setroomType]=useState('')
    
    const data={
      email:email,
      date:date,
      time:time,
      duration:duration,
      roomType:roomType
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/home/book', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(data)

      navigateto('/payment')
    }
  return (
    <div>
      <Header/>
        {/* <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
--> */}


<section className="bg-gray-100 mt-8">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="">
    
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4"  onSubmit={(e)=>{  handleSubmit(e)}}>
          <div>
            <label className="sr-only" for="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} 
                required
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="peer sr-only"
                id="option1"
                type="radio"
                tabindex="-1"
                name="option"
                value="premium"
                onChange={(e)=>setroomType(e.target.value)
               
                }
              />

              <label
                for="option1"
                className="block w-full rounded-lg border border-gray-200 p-3 hover:border-blue3 peer-checked:border-blue3 peer-checked:bg-blue3 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium" name="Premium"> Premium</span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option2"
                type="radio"
                tabindex="-1"
                name="option"
                value="Delux"
                onChange={(e)=>setroomType(e.target.value)}
              />

              <label
                for="option2"
                className="block w-full rounded-lg border border-gray-200 p-3 hover:border-blue3 peer-checked:border-blue3 peer-checked:bg-blue3 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium" name='Deluxe'> Delux </span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option3"
                type="radio"
                tabindex="-1"
                name="option"
                value="normal"
                onChange={(e)=>setroomType(e.target.value)}
              />

              <label
                for="option3"
                className="block w-full rounded-lg border border-gray-200 p-3 hover:border-blue3 peer-checked:border-blue3 peer-checked:bg-blue3 peer-checked:text-white"
                tabindex="0"
              >
                <span className="text-sm font-medium" name='Normal' > Normal </span>
              </label>
            </div>
          </div>
          <input
                className="peer sr-only"
                id="option3"
                type="radio"
                tabindex="-1"
                name="option"
              />

<div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">

             
              {/* <Dates date={date}  setDate={setdate} ids={'sds'} className='block w-full rounded-lg border text-sm font-medium border-gray-200 p-3 hover:border-blue3 peer-checked:border-blue3 peer-checked:bg-blue3 peer-checked:text-white'/> */}
              {/* <span className=' rounded-lg border-gray-200 p-3 text-lg'> to </span> */}
              <input type='date' className='text-center block w-full rounded-lg border text-sm font-medium border-gray-200 p-3 hover:border-blue3 peer-checked:border-blue3 peer-checked:bg-blue3 peer-checked:text-white' value={date} onChange={(e)=>setdate(e.target.value)}/>
             <input type='time' className='   text-center block w-full rounded-lg border text-sm font-medium border-gray-200 p-3 hover:border-blue3 peer-checked:border-blue3 peer-checked:bg-blue3 peer-checked:text-white'  value={time} onChange={(e)=>(settime(e.target.value))}/>
              <input type="number" placeholder='Duration(hrs)' value={duration} onChange={(e)=>setduration(e.target.value)} className=' text-center block w-full rounded-lg border text-sm font-medium border-gray-200 p-3 hover:border-blue3 peer-checked:border-blue3 peer-checked:bg-blue3 peer-checked:text-white text-black' />
</div>
          <div>
           






          </div>

          <div className="mt-4 flex justify-center">
            <button
              
              className="inline-block !w-40 rounded-lg bg-yellow1 px-5 py-3 font-medium text-white hover:bg-yellow2 sm:w-auto"
             
            >
             Book Now
            </button>
            <button
              
              
              className="inline-block ml-5 !w-40 rounded-lg bg-yellow1 px-5 py-3 font-medium text-white hover:bg-yellow2 sm:w-auto"
            >
             Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


{/* loader */}
{/* <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div> */}


    </div>
  )
}

export default Create