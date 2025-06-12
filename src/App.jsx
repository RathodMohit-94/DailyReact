import { useState , useEffect } from "react"
import State from "./components/State"
import Effect from "./components/Effect"
import Ref from "./components/Ref"


function App() {
  
  
  useEffect(() => {  
      alert("Welcome to Website. If load twice turn off srtictmode")
  }, [])
  




  return (
    <>
      <State /> {/* For  UseState.. */}
      <Effect /> {/* For  UseEffect.. */}
      <Ref />
    </>
  )
}

export default App
