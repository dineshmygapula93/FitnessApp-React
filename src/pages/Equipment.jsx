import React, { useEffect, useState } from 'react'

export default function BodyPart() {
  const equipmentlist=["assisted","band","barbell","body weight","bosu ball","cable","dumbbell","elliptical machine","ez barbell","hammer","kettlebell","leverage machine","medicine ball","olympic barbell","resistance band","roller","rope","skierg machine","sled machine","smith machine","stability ball","stationary bike","stepmill machine","tire","trap bar","upper body ergometer","weighted","wheel roller"]
  const[equipment,setEquipment] =useState('assisted')
  const[Data,setData] =useState('')
  useEffect(()=>{
    const fetchdata = async()=>{
      try {
        
        const response= await fetch(`
https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}?limit=10&offset=0
`,{
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
},[equipment])
  return (
    <>
    <div className='min-h-screen flex flex-row'>
      <div className='w-full sm:w-1/4 bg-red-700 flex flex-col justify-start items-center gap-3 py-5'>
      <h1 className='text-2xl bg-linear-120 bg-green-600 to-blue-700 p-1 rounded-2xl'>Select the Equipment you want</h1>
        {equipmentlist.map((b)=><li className="list-none text-base sm:text-xl text-white bg-red-700 py-1 px-4 sm:px-6 ring-2 ring-white rounded-2xl hover:cursor-pointer text-center" key={b} onClick={()=>setEquipment(b)}>{b}</li>)}
      </div>
      <div className='w-3/4 sm:w-3/4 bg-green-50'>
        <h1 className='text-3xl flex justify-center'>{equipment}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-5xl'>
          {Data.length>0? (
              Data.map((item,index)=>(
                <div key={index} className="">
                  <img src={item.gifUrl} alt="ex1" />
                  <h1>{item.name}</h1>
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
</div>)}
        </div>
      </div>
    </div>
    </>
  )
}
