import React, { Component } from 'react';
import styled from 'styled-components';

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
  border-style: none;
  border-bottom: black solid 1px;
  font-size: 20px;
  text-align: center;
  padding: 5px 20px;
  margin: 10px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-size: large;
  background: transparent;
  color: white;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  position: absolute;
  top: 5%;
  &:hover {
    background: white;
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  background-color: transparent;
  height: 100vh;
  width: 10%;
  position: absolute;
  left: ${props => props.left}
  top: 0;
`;

const Box = styled.div`
  background: ${props => props.bg};
  width: 100%;
  height: 20%;
`;
const HexInput = Input 
const RGBAInput = Input

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: '#ff00ffff',
      rgba: 'rgba(255,0,255,1.0)',
      bg: '#ff00ffff',
      showShades: false,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleHexChange = this.handleHexChange.bind(this)
    this.handleRGBAChange = this.handleRGBAChange.bind(this)
  }

  handleButtonClick = (e) => {
    this.setState(prevState => ({
      showShades: !prevState.showShades
    }))
  }

  handleHexChange = (e) => {
    console.log(e.target.value)
    console.log(this.checkValidHex(e.target.value))
    if (this.checkValidHex(e.target.value)) {
      this.setState({
        bg: e.target.value,
        rgba: this.hex2rgba(e.target.value)
      })
    }     
    this.setState({
      hex: e.target.value
    })
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
        hex: this.rgba2hex(e.target.value)
      })
    }
    this.setState({
      rgba: e.target.value,
    })
    
  }

  checkValidRGBA = (rgba) => {
    const [r, g, b, a] = rgba.slice(5,-1).split(',')
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
    const [r, g, b, a] = rgba.slice(5,-1).split(',')
    const rr = parseInt(r).toString(16).padStart(2, '0')
    const gg = parseInt(g).toString(16).padStart(2, '0')
    const bb = parseInt(b).toString(16).padStart(2, '0')
    const aa = Math.round((parseFloat(a) * 255)).toString(16).padStart(2, '0')
    return `#${rr}${gg}${bb}${aa}`
  }

  render() {
    return (
      <Wrapper bg={this.state.bg}>
        <Button
          onClick={this.handleButtonClick}
        >Show Shades</Button>
        { this.state.showShades ? (
          <div>
          <Container left={0}>
            <Box bg={'rgba(255,255,255,0.1)'}></Box>
            <Box bg={'rgba(255,255,255,0.2)'}></Box>
            <Box bg={'rgba(255,255,255,0.3)'}></Box>
            <Box bg={'rgba(255,255,255,0.4)'}></Box>
            <Box bg={'rgba(255,255,255,0.5)'}></Box>
          </Container>
          <Container left={'90%'}>
            <Box bg={'rgba(0,0,0,0.1)'}></Box>
            <Box bg={'rgba(0,0,0,0.2)'}></Box>
            <Box bg={'rgba(0,0,0,0.3)'}></Box>
            <Box bg={'rgba(0,0,0,0.4)'}></Box>
            <Box bg={'rgba(0,0,0,0.5)'}></Box>
          </Container>
          </div>
        ) : (
          <div></div> 
        )
          
        }
        <HexInput 
          type="text" 
          onChange={this.handleHexChange}
          value={this.state.hex}
          maxLength={9} />
        <RGBAInput 
          type="text"
          onChange={this.handleRGBAChange}
          value={this.state.rgba}
        />
      </Wrapper>
    );
  }
}

export default App;
