import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routerrouters from './Router'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div>
    //   <h1 className="text-3xl font-bold underline">
    //     Hello world!
    //   </h1>
    //   <h1>hola mundo</h1>
    // </div>
    <BrowserRouter>
      <Routerrouters/>
    </BrowserRouter>
  )
}

export default App
