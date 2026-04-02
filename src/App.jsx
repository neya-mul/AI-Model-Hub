import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CardContainer from './components/CardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Banner></Banner>
      <CardContainer></CardContainer>
      <Footer></Footer>
    </>
  )
}

export default App
