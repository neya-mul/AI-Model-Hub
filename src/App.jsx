import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Banner></Banner>
      <Footer></Footer>
    </>
  )
}

export default App
