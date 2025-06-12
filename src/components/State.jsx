import React, { useState, useEffect , useRef} from "react";

const State = () => {
  const [count, setCount] = useState(0);

  // const a = count;

  // useEffect(() => {
  //     alert("Clicked " +a+ " Times,HOOORRRAAAYYY...");
  // }, [count]);
  const a = useRef(0);

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`rerendaring ${a.current}`);
  });

  
  return (
    <div className="State">
      <h1 className="Stateh1">USE STATE </h1>
      <div className="State1">
        <p>The Count Is {count} </p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default State;
