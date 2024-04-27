import React from 'react'
import Navb from '../components/navb'
import Carousel from '../components/Carousel'
import About from './About'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
        <Navb />
        <div><Carousel /></div>
        <About />
        <Contact />
    </div>
  )
}
export default Home