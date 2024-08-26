// import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Footer from './components/Footer'
import Eyes from './components/Eyes'

function App() {
  return (
    <div className='w-full h-screen  bg-zinc-900 text-white'>
    <Navbar/>
    <LandingPage/>
    {/* <Marquee/> */}
    <Marquee />
      <About/>
      <Eyes/>
       <Footer/>
    </div>
  )
}

export default App