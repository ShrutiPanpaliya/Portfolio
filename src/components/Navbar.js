import React,{useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar() {
    const[expandNavbar,setExpandNavbar]=useState(false);
    const location =useLocation();
    useEffect(()=>{ setExpandNavbar(false) },[location])
  return (
    <div className='navbar' id ={expandNavbar? "open": "close"}>
      {/* <h3>Navbar</h3> */}
      
      <div className='toggleButton'>
      <button onClick={()=>{
        setExpandNavbar((prev)=>!prev)
      }}>
            <i className="fa fa-bars"></i>
            </button>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/experience'>Experience</Link>
      </div>
      
    </div>
  );
}

export default Navbar;
