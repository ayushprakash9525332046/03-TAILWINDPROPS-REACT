import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <h1 className='text-3xl bg-green-500  p-3 rounded-lg '>vite with tailwind</h1>
      <Cards username="In Love" post='Boys feel aggressive'/>

      <Cards/>
      
      <Cards/>
    </>
  )
}

export default App
