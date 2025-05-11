import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './pages/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUP from './pages/SignUP'
export default function App() {
  return (
    <>
 <div className='h-screen'>
   <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUP' element={<SignUP/>} />
    </Routes>
   </BrowserRouter>
  
 </div>
    </>
  )
}
