import React, { useEffect, useState } from 'react'

export default function Sample() {
   
  const[im ,setim] =useState([])
  useEffect(()=>{
    const fetchdata= async()=>{

      try {
        const response =await fetch('https://exercisedb.p.rpi.com/exercises/equipment/assisted?limit=10&offset=0',{
          method:"GET",
          headers :{
            'X-Rapidapi-Key': '8bc6785024msheecc8540adc975dp1e847ejsna48afde9f3e4',
            'X-Rapidapi-Host': 'exercisedb.p.rapidapi.com'
          }
        })
const data =await response.json();
console.log(data)
   setim(data)
      } catch (error) {
        console.log("error is "+error)
      }

    }
    fetchdata();
  },[])
  return (
    <>
      <h1>hello</h1>
    {im.length >0 ?(
      <div>
         <img src={im[0].gifUrl} alt="ex" />   
      <p>category: {im[0].bodyPart}</p>
      </div>
    ):(<p>loading</p>)}
    </>
  )
}
