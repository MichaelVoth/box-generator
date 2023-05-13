import './App.css';
import React, { useState } from 'react';
import BoxMaker from './components/boxMaker';
import Box from './components/box';

function App() {
  const [boxes, setBoxes] = useState([]);
  
  const BoxPasser = ( newBox ) => {
    setBoxes([...boxes, newBox]); // add newBox object to boxes array in state
    console.log("New Box: ", newBox);
  }

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxMaker 
        addBox = {BoxPasser} // This is the function passed down from App.js
      />
      <Box
        boxes ={boxes}// passing array of box objects to Box.js //
      />

    </div>
  );
}

export default App;
