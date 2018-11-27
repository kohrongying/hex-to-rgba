import React from 'react';
import './Switch.css';

const Switch = (props) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={props.toggle}/>
      <span className="slider round"></span>
    </label>
  )    
}

export default Switch;