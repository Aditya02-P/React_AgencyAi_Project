import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}></Hero>
      <TrustedBy></TrustedBy>
    </div>
  )
}

export default App