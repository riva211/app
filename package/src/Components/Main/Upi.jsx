import React from 'react'
import { useNavigate } from 'react-router-dom'
function Upi() {
  const nav = useNavigate()
  return (
    <div className='flex  justify-center   mt-7'>
      <div className='flex  justify-center items-center gap-1   mt-7 flex-col' >

        <img className='' src="https://qph.cf2.quoracdn.net/main-qimg-6f10dcab91fe9a768c8757381a98e9ae-pjlq" alt="" />
            <button class="btn btn-block btn-success submit-button bg-yellow1 hover:bg-yellow2 p-3 align-middle w-[20%]" onClick={()=>{nav('/cash')}}>Done</button>
      </div>
          </div>
  )
}

export default Upi