import React from 'react';
// import styled from 'styled-components';
import './Switch.css';

class Switch extends React.Component {

  render() {
    return (
      <label className="switch">
        <input type="checkbox" onClick={this.props.toggle}/>
        <span className="slider round"></span>
      </label>
    )
  }
    
}

export default Switch;