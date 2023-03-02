import React from 'react'
import Room from "../../assest/room.jpeg"

function Bookings() {
  return (
    <div>
  


<article className="flex bg-white border-blue1 border rounded-lg overflow-hidden p-2 transition hover:shadow-xl mt-3 ">


  <div className="hidden sm:block sm:basis-56">
   <img src={Room} />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-l border-gray-900/10 p-2 sm:border-l-transparent sm:p-3">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
        Delux
        </h3>
      </a>

      <ul className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-5">
        <li>Start Date : 22/22/2222 </li>
        <li>End Date : 22/22/2222 </li>
        <li>Availibility : yes</li>
        <li>Amount per day: 5000rs</li>
        <li>Total Amount: 5000rs</li>
        
      </ul>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <a
        href="#"
        className="block bg-blue1 px-5 py-3  lg:mx-2  text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-blue2"
      >
       Edit Booking
      </a>
      
    </div>
  </div>
</article>





    </div>
  )
}

export default Bookings