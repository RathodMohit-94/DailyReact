import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [click, setClick] = useState(false); // State to track button click

  useEffect(() => {
    alert('This is an example of useEffect...');
  }, [click]); // Effect runs when `click` changes

  const handleClick = () => {
    setClick((prev) => !prev); // Toggle click state
  };

  return (
    <div className="State">
      <h1 className="Stateh1">USE EFFECT</h1>
      <div className="State1">
        <p>This will trigger useEffect.</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Effect;