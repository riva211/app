import React,{useState} from "react";
import Header from "../Header/Header";
import Bookings from "../Main/Bookings";
import Create from "../Main/Create";
import Example from "./Drop";
import { useNavigate } from "react-router-dom";
import Dates from "../Main/Date"
function Filter() {
  const [startD,setstartD]=useState(new Date())
  const [endD,setendD]=useState(new Date())
  const navigateto = useNavigate()
  return (
    <div>
      <nav class="fixed top-0 z-50 w-full">
        <div class="flex items-center justify-between">
          <Header />
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 justify-center z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center text-lg p-2 font-semibold  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="ml-8">Filter</span>
              </a>
            </li>

            <li>
              <div date-rangepicker class="flex-row pl-8 items-center">
                <div class="relative">
                  <Dates date={startD}  setDate={setstartD} ids={'sd'}/>
                </div>
                <span class="mx-4  text-gray-500">to</span>

                {/* <Dates date={endD}  setDate={setendD} /> */}
                <Dates date={endD} setDate={setendD} ids={'ed'}/>
              </div>
            </li>

            <li class="flex items-center pl-9 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <Example />
            </li>
          <div className="absolute justify-center ml-5 bottom-14 ">
          <a
  class="inline-flex items-center gap-2 rounded border border-indigo-600 btn btn-wide bg-yellow2 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="#"
>
  <span class="text-sm font-medium"> Cancle Bookings </span>

  <svg
    class="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
          </div>
          <div className="absolute justify-center ml-5 bottom-0.5 ">
          <div
  class="inline-flex items-center gap-2 rounded border border-indigo-600 btn btn-wide bg-yellow2 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
 
>
  <span class="text-sm font-medium"   onClick={()=>{navigateto("/create")}}> Create Booking </span>

  <svg
    class="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</div>
          </div>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 mt-14">
          <Bookings />
          {/* <Create/> */}
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Filter;
