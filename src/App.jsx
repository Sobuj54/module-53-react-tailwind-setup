import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PriceList from './component/PriceList/PriceList'
import DashBoard from './component/DashBoard/DashBoard'
import Phonebar from './component/Phonebar/Phonebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <h1 className='text-5xl text-blue-700'>hellow from tailwind.</h1>
    <PriceList></PriceList>
    <DashBoard></DashBoard>
    <Phonebar></Phonebar>
    </>
  )
}

export default App
