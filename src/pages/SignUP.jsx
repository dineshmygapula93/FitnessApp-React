import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase'

export default function SignUP() {

const[email,setEmail] =useState('');
const[password,setPassword] = useState('')
const[conpassword,setconPassword] =useState('')
const navigate =useNavigate()

const register = async(e)=>{
e.preventDefault()
  try {
   if (password ==conpassword) {
     await createUserWithEmailAndPassword(auth,email,password);
    alert("sucessfully account created")
    navigate('/dashboard')
   } else {
    alert("Please check confirm password ")
   }
    
  } catch (error) {
    console.log(error)
  }
}




  return (
    <>
    
<div className="">
  <section className="rounded-md p-2 bg-white">
    <div className="flex items-center justify-center my-3">
      <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2"></div>
        <h2 className="text-2xl font-bold leading-tight">
          Sign up to create account
        </h2> 
     
        <form className="mt-5" onSubmit={register}>
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
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Confirm Password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="password"
                  onChange={(e)=>setconPassword(e.target.value)}
                />
              </div>
    
    
            </div>

            <div>
              <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
           <p className="mt-2 text-base text-gray-600">
          Already have an account? Sign In
        </p>
         <NavLink to='/login'>
            <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="button"
              >
                Login
              </button>
         </NavLink>
      </div>
      
    </div>
    
  </section>
</div>


    </>
  )
}
