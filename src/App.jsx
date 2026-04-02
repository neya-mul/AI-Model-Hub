import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    {/* <Banner></Banner> */}
    <Banner></Banner>

    </>
  )
}

export default App
