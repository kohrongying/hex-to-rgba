import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../colors';
import { hex2rgba, checkValidHex, rgba2hex, checkValidRGBA, checkDarkMode } from '../helpers';
import InvalidColor from './InvalidColor';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const PaletteItems = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const PaletteItem = styled.div`
  flex: 1;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  &:hover {
    cursor: pointer;
  }
`;

class Palette extends Component {
  state = {
    hex: '#ffffffff',
    rgba: 'rgba(255,255,255,1.0)',
    bg: '#ffffffff',
    darkMode: false,
    colors: [],
    invalidColor: false,
    color: ''
  }
  
  componentDidMount(){
    const color = this.props.match.params.color.toLowerCase()
    this.setState({ color })
    const colors = Colors[color]
    if (colors == null) {
      this.setState({ invalidColor: true })
    } else {
      this.setState({ 
        colors: colors,
        hex: colors[4],
        rgba: hex2rgba(colors[4]),
        bg: colors[4]
      })
    }
    
  }

  handleHexChange = (e) => {
    if (checkValidHex(e.target.value)) {
      const rgba = hex2rgba(e.target.value)
      this.setState({
        bg: e.target.value,
        rgba: rgba,
        darkMode: checkDarkMode(rgba)
      })
    }     
    this.setState({ hex: e.target.value })
  }

  handleRGBAChange = (e) => {
    if (checkValidRGBA(e.target.value)) {
      this.setState({
        bg: e.target.value,
        hex: rgba2hex(e.target.value),
        darkMode:checkDarkMode(e.target.value)
      })
    }
    this.setState({ rgba: e.target.value })
  }

  onClickItem = item => {
    this.setState({ 
      hex: item.target.textContent,
      bg: item.target.textContent,
      rgba: hex2rgba(item.target.textContent)
    })
  }

  render(){
    return (
      <div>
      {this.state.invalidColor ? (
        <InvalidColor color={this.state.color} />
      ) : (
        <Wrapper bg={this.state.bg}>
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

        <PaletteItems>
          {this.state.colors.map((item, index) => {
            return(
              <PaletteItem 
                bg={item} 
                key={index} 
                onClick={this.onClickItem}>
                {item}
              </PaletteItem>
            )
          })}
        </PaletteItems>
        </Wrapper>
      )}
      </div>  
    )
  }  
}

export default Palette;