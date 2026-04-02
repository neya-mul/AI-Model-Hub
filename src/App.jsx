import { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
// import a from '../public/models.json'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CardContainer from './components/CardContainer'

 let api = fetch('models.json')
    .then(res => res.json())
  // console.log(ai);


function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Banner></Banner>
   
        <CardContainer api={api}></CardContainer>
     
      <Footer></Footer>
    </>
  )
}

export default App
