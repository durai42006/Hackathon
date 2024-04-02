// import { useState } from 'react'
// import './App.css'
// import Home from './Components/Home/home'
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Home />
//     </div>
//   )
// }

// export default App


import React from 'react'
import './Components/Home/home.css'
import Home from './Components/Home/home'
import Navbar from './Components/Navbar/navbar'


function App() {
  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}

export default App