import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
// import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Typewriter from 'typewriter-effect'
const Carousel = () => {
    const navigate = useNavigate();
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
            <div className="carousel-inner" id='carousel'>
                <div className="carousel-caption adjust" style={{ zIndex: "4", marginBottom: '300px', fontFamily: 'Dela Gothic One' }}>
                    <h2>Welcome to  <span className='text' style={{display:'inline-block'}}>
                            <Typewriter
                                options={{
                                    autoStart:true,
                                    loop:true,
                                    delay:80,
                                    strings:["   Zwigato"],
                                }}
                            />
                        </span>
                    </h2>
                    <p style={{marginTop:'6px'}}>Your delicious meal awaits you!</p>
                </div>
                <div className="carousel-caption" style={{ zIndex: "4" }}>
                    <button className="btn btn-outline-success my-2 my-sm-0 text-light bg-success" type="submit" onClick={() => navigate('/order')} style={{fontFamily:"Montserrat, sans-serif"}}>Order Now</button>
                </div>
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/800x600/?juice" className="d-block w-100" style={{ filter: "brightness(50%)" }} />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/800x600/?pizza" className="d-block w-100" style={{ filter: "brightness(50%)" }} />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/800x600/?cake" className="d-block w-100" style={{ filter: "brightness(50%)" }} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel