import React, { Component } from 'react';
import styled from 'styled-components';
import Switch from './Switch';
import Shades from './Shades';
import { hex2rgba, checkValidHex, rgba2hex, checkValidRGBA, checkDarkMode } from '../helpers';
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

const Button = styled.button`
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
`;

const ShowButton = styled(Button)`
  top: 5%;
  position: absolute;
`;

const AddButton = styled(Button)`
  margin-top: 10px;
`;

const styles = {
  hamburger: {
    position: 'absolute',
    top: 20,
    left: 20
  }
}
class Converter extends Component {
  state = {
    hex: '#ff00ffff',
    rgba: 'rgba(255,0,255,1.0)',
    bg: '#ff00ffff',
    showShades: false,
    darkMode: false,
    isHexCopied: true,
    showSideBar: false,
    myPalette: []
  }
  
  componentDidMount() {
    const myPalette = localStorage.getItem("kry-myPalette") ? JSON.parse(localStorage.getItem("kry-myPalette")) : []
    this.setState({ myPalette })
  }

  handleButtonClick = (e) => {
    this.setState(prevState => ({
      showShades: !prevState.showShades
    }))
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
        darkMode: checkDarkMode(e.target.value)
      })
    }
    this.setState({ rgba: e.target.value })
  }

  toggleCopyMode = (e) => {
    this.setState(prevState => ({
      isHexCopied: !prevState.isHexCopied
    }))
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

  render() {
    return (
      <Wrapper bg={this.state.bg}>
        <Hamburger style={styles.hamburger} onClick={this.showSideBar} />
        { this.state.showSideBar ? (
          <SideBar close={this.closeSideBar} myPalette={this.state.myPalette} />
        ) : null }

        <ShowButton
          onClick={this.handleButtonClick}
          darkMode={this.state.darkMode}
        >Show Shades</ShowButton>

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

        <AddButton
          onClick={this.addToPalette}
          darkMode={this.state.darkMode}
        >Add to My Palette</AddButton>
      </Wrapper>
    );
  }
}

export default Converter;
