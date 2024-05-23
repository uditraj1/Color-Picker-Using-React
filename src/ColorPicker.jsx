import React, {useState} from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#FFFFFF');

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (<div className="color-picker-container">
          <h1> Color Picker App</h1>
          <div className="show-color" style={{backgroundColor: color}}>
            <p> Picked Color: {color} </p>
          </div>
          <label>Choose a Color of Your Choice:</label>
          <input type="color" value={color} onChange={handleColorChange}/>
          </div>);
}

export default ColorPicker
