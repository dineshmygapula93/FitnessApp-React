import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const images = [
  "https://c4.wallpaperflare.com/wallpaper/273/372/998/bodybuilder-gyms-muscular-arnold-schwarzenegger-wallpaper-preview.jpg",
  "https://wallsdesk.com/wp-content/uploads/2016/11/Arnold-Schwarzenegger-HD-Background.jpg",
  "https://wallpaperaccess.com/full/4722380.jpg",
  "https://cdn.wallpapersafari.com/46/5/nuwrHg.jpg",
  "https://i.pinimg.com/originals/b5/0d/b2/b50db2a093b7967ccc1658aa5aa622f0.jpg"
];

export default function Home() {
  const [feetheight, Setfeetheight] = useState(5);
  const [inchesheight, Setinchesheight] = useState(8);
  const [weight, Setweight] = useState(60);
  const [bmi, Setbmi] = useState(18.5);
  const [bmires, Setbmires] = useState('Normal weight');
  const [currentSlide, setCurrentSlide] = useState(0);

  const calcBmi = () => {
    let feet = parseInt(feetheight);
    let inches = parseInt(inchesheight);
    let height = (feet * 12 + inches) * 0.0254;
    let w = parseInt(weight);
    let result = w / (height * height);
    Setbmi(result.toFixed(1));
    if (result < 18.5) {
      Setbmires('Under Weight');
    } else if (result >= 18.5 && result <= 24.9) {
      Setbmires('Normal weight');
    } else if (result > 25 && result <= 29.9) {
      Setbmires('Over Weight');
    } else {
      Setbmires('Obesity');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col md:flex-row h-full min-h-screen'>
      <div className='w-full md:w-1/3 bg-red-800 p-4 md:p-6 text-white'>
        <h1 className='text-2xl md:text-3xl mb-4'>Calculate Body Mass Index</h1>
        <div className='flex flex-col gap-4'>
          <div>
            <h2 className='text-xl md:text-2xl'>Height</h2>
            <h3 className='text-lg'>Feet</h3>
            <input
              type='range'
              min='1'
              max='7'
              className='w-full'
              onChange={(e) => {
                Setfeetheight(e.target.value);
                calcBmi();
              }}
            />
          </div>

          <div>
            <h3 className='text-lg'>Inches </h3>
            <input
              type='range'
              min='0'
              max='11'
              className='w-full'
              onChange={(e) => {
                Setinchesheight(e.target.value);
                calcBmi();
              }}
            />
          </div>

          <div>
            <h3 className='bg-amber-50 text-black p-2 rounded-lg text-lg'>
              Height = {feetheight}.{inchesheight} ft
            </h3>
          </div>

          <div>
            <h3 className='text-lg'>Weight (kg)</h3>
            <input
              type='range'
              min='3'
              max='150'
              className='w-full'
              onChange={(e) => {
                Setweight(e.target.value);
                calcBmi();
              }}
            />
          </div>

          <h3 className='bg-amber-50 text-black p-2 rounded-lg text-lg'>
            Weight = {weight} kg
          </h3>

          <h3 className='bg-amber-50 text-black p-2 rounded-lg text-lg'>
            BMI = {bmi}
          </h3>

          <h3 className='bg-amber-50 text-black p-2 rounded-lg text-lg'>
            {bmires}
          </h3>
        </div>
      </div>

      <div className='w-full md:w-2/3 bg-black'>
        <div className='relative h-56 sm:h-72 md:h-80 lg:h-96 w-full'>
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>

        <div className='flex justify-center p-4'>
          <div className="w-full md:w-[40em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-4 flex flex-col gap-4 backdrop-blur-[12px] mt-6">
            <h1 className="text-xl md:text-2xl font-medium">
              To Get Physical Exercise Tutorials Login into the App
            </h1>

            <div className='flex gap-4'>
            <NavLink to='/login'>  <button className="px-4 py-2 border rounded-full flex items-center gap-2 group hover:translate-y-1 transition duration-200 backdrop-blur-[12px]">
                <p>Login</p>
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition duration-300"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button></NavLink>

             <NavLink to='/signup'>
                 <button className="px-4 py-2 border rounded-full flex items-center gap-2 group hover:translate-y-1 transition duration-200 backdrop-blur-[12px]"><p>Sign Up</p>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition duration-300"stroke="currentColor"strokeWidth="1"viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
             </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
