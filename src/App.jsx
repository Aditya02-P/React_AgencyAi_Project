import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Ourwork from './components/Ourwork';
import Teams from './components/Teams';
import Contact from './components/Contact';
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}></Hero>
      <TrustedBy></TrustedBy>
      <Services></Services>
      <Ourwork></Ourwork>
      <Teams></Teams>
      <Contact ></Contact>
    </div>
  )
}

export default App