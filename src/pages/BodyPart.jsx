import React, { useEffect, useState } from 'react'

export default function BodyPart() {
  const bodypartlist=["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"]
  const[bodypart,setBodypart] =useState('back')
  const[Data,setData] =useState('')
  useEffect(()=>{
    const fetchdata = async()=>{
      try {
        const response= await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}?limit=10&offset=0`,{
  method: "GET",
  headers :{
    'X-Rapidapi-Key': import.meta.env.VITE_REACT_APP_KEY,
    'X-Rapidapi-Host': 'exercisedb.p.rapidapi.com'
  }
})
const data =await response.json();
setData(data)
     
    }catch(error){
console.log(error)
    }
  }
  fetchdata()
},[bodypart])
  return (
    <>
    <div className='min-h-screen flex'>
      <div className='w-full sm:w-1/4 bg-red-700 flex flex-col justify-start items-center gap-3 py-5'>
      <h1 className='text-2xl bg-linear-120 bg-green-600 to-blue-700 p-1 rounded-2xl'>Select the body part you want</h1>
        {bodypartlist.map((b)=><li className="list-none text-base sm:text-xl text-white bg-red-700 py-1 px-4 sm:px-6 ring-2 ring-white rounded-2xl hover:cursor-pointer text-center" key={b} onClick={()=>setBodypart(b)}>{b}</li>)}
      </div>
      <div className='w-3/4 sm:w-3/4 bg-green-50'>
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 my-8 drop-shadow-lg">
  {bodypart}
</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-5xl'>
          {Data.length>0? (
              Data.map((item,index)=>(
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 hover:shadow-2xl transition-shadow duration-300">
                  <img src={item.gifUrl} alt="ex1" className=''/>
                  <h1 className='text-xl font-semibold text-gray-800 text-cente'>{item.name}</h1>
                </div>
              ))
          ):(<div className="flex items-center justify-center min-h-screen col-span-full h-full">
  <div className="text-center">
    <p className="text-lg font-semibold text-gray-700 mb-4 animate-pulse">Loading, please wait...</p>
    <img
      className="animate-spin rounded-[15vw] w-30 h-30 mx-auto"
      src="https://spinillusion.hu/wp-content/uploads/favicon-opt.png"
      alt="spin"
    />
  </div>
</div>
)}
        </div>
      </div>
    </div>
    </>
  )
}
