import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as Cross }  from '../svg/cross.svg';
import { checkDarkMode, hex2rgba } from '../helpers';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

const Color = styled.div`
  flex: 1;
  background: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${props => props.darkMode ? "white" : "black"};
`

const styles = {
  cross: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 10,
    right: 10,
    cursor: 'pointer'
  }
}
class MyPalette extends Component {
  state = {
    myPalette: [],
  }

  componentDidMount() {
    const myPalette = localStorage.getItem("kry-myPalette") ? JSON.parse(localStorage.getItem("kry-myPalette")) : []
    this.setState({ myPalette })
  }
  
  removeColor = index => {
    let myPalette = this.state.myPalette
    myPalette.splice(index, 1)
    localStorage.setItem('kry-myPalette', JSON.stringify(myPalette));
    this.setState({ myPalette })
  }

  render(){
    return(
      <Wrapper>
        {this.state.myPalette.map((item, index) =>{
          return (
            <Color darkMode={checkDarkMode(hex2rgba(item))} bg={item} key={index}>
              <Cross onClick={() => this.removeColor(index)} style={styles.cross} />
              {item}
            </Color>
          )
        })}
      </Wrapper>
    )
  }
}

export default MyPalette;