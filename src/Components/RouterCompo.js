
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import { Students } from "./Students";
import { ContactUs } from "./ContactUS";
import { Home } from "./Home";
import './RouterComponents.css'

export function RouterComponents(){
    return(        <>
        <BrowserRouter>
        <div className='link'>
        <div className='NavBar'>
            <ul>
                <Link  to='/'><li>Home</li></Link>
                <Link to='/student'><li>Student</li></Link>
                <Link to='/contact'><li>Contact Us</li></Link>
            </ul>
        </div>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/student' element={<Students />} />
            <Route path='/contact' element={<ContactUs />} />
            </Routes>
            </BrowserRouter>
        </>)
}