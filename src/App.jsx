import { useState, useEffect, useRef } from "react";
import State from "./components/State";
import Effect from "./components/Effect";
import Ref from "./components/Ref";
import Header from "./components/Header";


function App() {
  useEffect(() => {
    alert("Welcome to Website. If load twice turn off srtictmode");
  }, []);

  
  return (
    <>
      <Header />
      <State /> {/* For  UseState.. */}
      <Effect /> {/* For  UseEffect.. */}
      <Ref />
    </>
  );
}

export default App;
