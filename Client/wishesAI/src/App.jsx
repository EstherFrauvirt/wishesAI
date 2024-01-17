import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Whish from './components/wish/Whish'
  
function App() {
  const [count, setCount] = useState(0)

  return (
   <Whish/>
  )
}

export default App
