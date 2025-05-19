import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase'

export default function SignUP() {

const[email,setEmail] =useState('');
const[password,setPassword] = useState('')
const navigate =useNavigate()

const loginapp = async(e)=>{
e.preventDefault()
     
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/dashboard")
        const user = userCredential.user; 
      })
      .catch((error) => {
       console.log("The error "+error)
        alert('User not found')
        setEmail('')
        setPassword('')
      });
    
  
}
  return (
    <>
    
<div className="">
  <section className="rounded-md p-2 bg-white">
    <div className="flex items-center justify-center my-3">
      <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2"></div>
        <h2 className="text-2xl font-bold leading-tight">
          Sign in to account
        </h2> 
     
        <form className="mt-5" onSubmit={loginapp}>
          <div className="space-y-4">
            
            <div>
              <label className="text-base font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  placeholder="Email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="email" onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
    
    
            </div>

          
            <div>
              <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="submit"
              >
               Login
              </button>
            </div>
          </div>
        </form>
           <p className="mt-2 text-base text-gray-600">
          create have an account? Sign Up
        </p>
         <NavLink to='/signup'>
            <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="button"
              >
                Sign UP
              </button>
         </NavLink>
      </div>
      
    </div>
    
  </section>
</div>


    </>
  )
}
