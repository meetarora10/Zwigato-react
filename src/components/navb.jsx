import React from 'react'
import { NavLink } from "react-router-dom";
import './style.css'
import { Link } from 'react-scroll'
const Navb = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-1 fst-italic" to="/" style={{color:'orange',filter:'brightness(100%)',fontFamily:'Protest Guerrilla,sans-serif'}}>Zwigato</NavLink>
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse" id='navbarNavAltMarkup'>
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/" style={{filter:'brightness(100%)'}}>Home</NavLink>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500} style={{cursor:'pointer',marginTop:'8px'}}>About</Link>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} style={{cursor:'pointer',marginTop:'8px',marginLeft:'7px'}}>Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navb