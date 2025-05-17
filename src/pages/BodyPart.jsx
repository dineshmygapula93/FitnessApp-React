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
console.log(data)
setData(data)
     
    }catch(error){
console.log(error)
    }
  }
  fetchdata()
},[bodypart])
  return (
    <>
    <div className='flex h-screen'>
      <div className='w-1/4 bg-red-700 flex flex-col justify-start items-center gap-3 py-5'>
      <h1 className='text-2xl bg-linear-120 bg-green-600 to-blue-700 p-1 rounded-2xl'>Select the body part you want</h1>
        {bodypartlist.map((b)=><li className="list-none text-2xl text-white bg-red-700  py-0.5 px-6 ring-2 ring-white rounded-2xl hover:cursor-pointer" key={b} onClick={()=>setBodypart(b)}>{b}</li>)}
      </div>
      <div className='w-3/4 bg-green-50'>
        <h1 className='text-3xl flex justify-center'>{bodypart}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-5xl'>
          {Data.length>0? (
              Data.map((item,index)=>(
                <div key={index} className="">
                  <img src={item.gifUrl} alt="ex1" />
                  <h1>{item.name}</h1>
                </div>
              ))
          ):(<p>loading</p>)}
        </div>
      </div>
    </div>
    </>
  )
}
