import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../colors';
import { hex2rgba, checkValidHex, rgba2hex, checkValidRGBA, checkDarkMode } from '../helpers';
import InvalidColor from './InvalidColor';
import { ReactComponent as Hamburger }  from '../svg/hamburger.svg';
import SideBar from './SideBar';

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

const AddButton = styled.button`
  font-size: large;
  background: transparent;
  color: ${props => props.darkMode ? "white" : "black"};
  padding: 10px;
  border: 1px solid ${props => props.darkMode ? "white" : "black"};
  border-radius: 5px;  
  &:hover {
    background: ${props => props.darkMode ? "white" : "black"};
    color: ${props => props.darkMode ? "black" : "white"};
  }
  &:focus {
    outline: none;
  }
  margin-top: 10px;
`;

const styles = {
  hamburger: {
    position: 'absolute',
    top: 20,
    left: 20
  }
}

class Palette extends Component {
  state = {
    hex: '#ffffffff',
    rgba: 'rgba(255,255,255,1.0)',
    bg: '#ffffffff',
    darkMode: false,
    colors: [],
    invalidColor: false,
    color: '',
    showSideBar: false,
    myPalette: []
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

    const myPalette = localStorage.getItem("kry-myPalette") ? JSON.parse(localStorage.getItem("kry-myPalette")) : []
    this.setState({ myPalette })
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

  addToPalette = () => {
    let myPalette = localStorage.getItem("kry-myPalette") ? JSON.parse(localStorage.getItem("kry-myPalette")) : []
    myPalette.push(this.state.bg)
    myPalette = [...new Set(myPalette)]
    localStorage.setItem('kry-myPalette', JSON.stringify(myPalette));
    this.setState({ myPalette })
  }

  showSideBar = () => {
    this.setState({ showSideBar: true })
  }

  closeSideBar = () => {
    this.setState({ showSideBar: false })
  }

  render(){
    return (
      <div>
      {this.state.invalidColor ? (
        <InvalidColor color={this.state.color} />
      ) : (
        <Wrapper bg={this.state.bg}>
          <Hamburger style={styles.hamburger} onClick={this.showSideBar} />
          { this.state.showSideBar ? (
            <SideBar close={this.closeSideBar} myPalette={this.state.myPalette} />
          ) : null }
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
          <AddButton
            onClick={this.addToPalette}
            darkMode={this.state.darkMode}
          >Add to My Palette</AddButton>

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