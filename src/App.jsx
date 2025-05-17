import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './pages/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUP from './pages/SignUP'
import DashBoard from './pages/DashBoard'
import BodyPart from './pages/BodyPart'
import Equipment from './pages/Equipment'
import Muscle from './pages/Target'
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
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/bodypart' element={<BodyPart/>}/>
      <Route path='equipment' element={<Equipment/>}/>
      <Route path='/muscle' element={<Muscle/>}/>
    </Routes>
   </BrowserRouter>
  
 </div>
    </>
  )
}
