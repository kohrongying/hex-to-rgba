import React, { Component } from 'react';
import styled from 'styled-components';
import Switch from './components/Switch';
import Shades from './components/Shades';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 4em;
  background: ${props => props.bg}
`;

const Input = styled.input`
  background-color: transparent;
  color: ${props => props.darkMode ? "white" : "black"};
  border-style: none;
  border-bottom: ${props => props.darkMode ? "white" : "black"} solid 1px;
  font-size: 20px;
  text-align: center;
  padding: 5px 20px;
  margin: 10px;

  &:focus {
    outline: none;
  }
`;

const HexInput = Input 
const RGBAInput = Input

const Button = styled.button`
  font-size: large;
  background: transparent;
  color: ${props => props.darkMode ? "white" : "black"};
  padding: 10px;
  border: 1px solid ${props => props.darkMode ? "white" : "black"};
  border-radius: 5px;
  position: absolute;
  top: 5%;
  &:hover {
    background: ${props => props.darkMode ? "white" : "black"};
    color: ${props => props.darkMode ? "black" : "white"};
  }
  &:focus {
    outline: none;
  }
`;

class App extends Component {
  state = {
    hex: '#ff00ffff',
    rgba: 'rgba(255,0,255,1.0)',
    bg: '#ff00ffff',
    showShades: true,
    darkMode: false,
    isHexCopied: true
  }

  handleButtonClick = (e) => {
    this.setState(prevState => ({
      showShades: !prevState.showShades
    }))
  }

  handleHexChange = (e) => {
    if (this.checkValidHex(e.target.value)) {
      const rgba = this.hex2rgba(e.target.value)
      this.setState({
        bg: e.target.value,
        rgba: rgba,
        darkMode: this.checkDarkMode(rgba)
      })
    }     
    this.setState({ hex: e.target.value })
  }

  checkValidHex = (hex) => {
    const regex = /^#[a-fA-F0-9]{6}$/
    const regex2 = /^#[a-fA-F0-9]{8}$/
    return regex.test(hex) || regex2.test(hex)
  }

  hex2rgba = (hex) => {
    const [rr, gg, bb, aa] = hex.match(/\w\w/g)
    const r = parseInt(rr, 16)
    const g = parseInt(gg, 16)
    const b = parseInt(bb, 16)
    const alpha = aa ? (parseInt(aa, 16) / 255).toFixed(2) : 1.0
    return `rgba(${r},${g},${b},${alpha})`
  }

  handleRGBAChange = (e) => {
    if (this.checkValidRGBA(e.target.value)) {
      this.setState({
        bg: e.target.value,
        hex: this.rgba2hex(e.target.value),
        darkMode: this.checkDarkMode(e.target.value)
      })
    }
    this.setState({ rgba: e.target.value })
  }

  checkValidRGBA = (rgba) => {
    let r = 0; 
    let g = 0; 
    let b = 0;
    let a = 0;
    if (rgba.slice(0,4) === "rgba") {
      const [r, g, b, a] = rgba.slice(5,-1).split(',')
    } else {
      const [r, g, b] = rgba.slice(4,-1).split(',')
      a = 1
    }
    return (
      this.inRange(r, 255) && 
      this.inRange(g, 255) && 
      this.inRange(b, 255) &&
      this.inRange(a, 1)
    )
  }

  inRange = (n, upperLimit) => {
    return parseInt(n) >= 0 && parseInt(n) <= upperLimit
  }

  rgba2hex = (rgba) => {
    if (rgba.slice(0,4) === "rgba") {
      const [r, g, b, a] = rgba.slice(5,-1).split(',')
      const rr = parseInt(r).toString(16).padStart(2, '0')
      const gg = parseInt(g).toString(16).padStart(2, '0')
      const bb = parseInt(b).toString(16).padStart(2, '0')
      const aa = Math.round((parseFloat(a) * 255)).toString(16).padStart(2, '0')
      return `#${rr}${gg}${bb}${aa}`
    } else {
        const [r, g, b] = rgba.slice(4,-1).split(',')
                              .map(i => parseInt(i).toString(16).padStart(2, '0'))
        return `#${r}${g}${b}`                      
    }
  }

  checkDarkMode = (rgba) => {
    const [r, g, b, a] = rgba.slice(5,-1).split(',')
    const val = parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114 / 1000
    return val < 123 ? true : false
  }

  toggleCopyMode = (e) => {
    this.setState(prevState => ({
      isHexCopied: !prevState.isHexCopied
    }))
  }

  render() {
    return (
      <Wrapper bg={this.state.bg}>
        <Button
          onClick={this.handleButtonClick}
          darkMode={this.state.darkMode}
        >Show Shades</Button>

        <Switch toggle={this.toggleCopyMode}></Switch>

        { this.state.showShades ? (
          <Shades rgba={this.state.rgba} copyHex={this.state.isHexCopied}/>
        ) : (<div></div>)}

        <HexInput 
          type="text" 
          onChange={this.handleHexChange}
          value={this.state.hex}
          maxLength={9}
          darkMode={this.state.darkMode}
        />
        <RGBAInput 
          type="text"
          onChange={this.handleRGBAChange}
          value={this.state.rgba}
          darkMode={this.state.darkMode}
        />
      </Wrapper>
    );
  }
}

export default App;
