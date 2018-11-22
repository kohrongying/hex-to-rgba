import React, { Component } from 'react';
import styled from 'styled-components';



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
  z-index: 999;
`;

class Shades extends React.Component {
  constructor(props) {
    super(props)
    this.copyToClipboard = this.copyToClipboard.bind(this)
  }
  
  copyToClipboard = (e) => {
    const el = document.createElement('textarea');
    el.value = this.convertToRGB(e.target.dataset.layer)
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  
  convertToRGB = (layer) => {
    const source = this.convertToRGBAObj(layer)
    const bg = this.convertToRGBAObj(this.props.rgba)
    console.log('source', source)
    console.log('bg', bg)
    const r = Math.round(((1-source.a) * bg.r) + (source.a * source.r))
    const g = Math.round(((1-source.a) * bg.g) + (source.a * source.g))
    const b = Math.round(((1-source.a) * bg.b) + (source.a * source.b))
    return `rgb(${r}, ${g}, ${b})`
  }
  
  convertToRGBAObj = (rgba) => {
    const [r, g, b, a] = rgba.slice(5,-1).split(',')
    return {r:r, g:g, b:b, a:a}
  }

  render() {
    return(
      <div>
        <Container left={0}>
          
          <Box bg={'rgba(255,255,255,0.1)'} data-layer={'rgba(255,255,255,0.1)'} onClick={this.copyToClipboard}></Box>
          <Box bg={'rgba(255,255,255,0.2)'} data-layer={'rgba(255,255,255,0.2)'} onClick={this.copyToClipboard}></Box>
          <Box bg={'rgba(255,255,255,0.3)'} data-layer={'rgba(255,255,255,0.3)'} onClick={this.copyToClipboard}></Box>
          <Box bg={'rgba(255,255,255,0.4)'} data-layer={'rgba(255,255,255,0.4)'} onClick={this.copyToClipboard}></Box>
          <Box bg={'rgba(255,255,255,0.5)'} data-layer={'rgba(255,255,255,0.5)'} onClick={this.copyToClipboard}></Box>
        </Container>
        <Container left={'90%'}>
          <Box bg={'rgba(0,0,0,0.1)'} data-layer={'rgba(0,0,0,0.1)'} onClick={this.copyToClipboard}></Box>
          <Box bg={'rgba(0,0,0,0.2)'} data-layer={'rgba(0,0,0,0.2)'} onClick={this.copyToClipboard}></Box>
          <Box bg={'rgba(0,0,0,0.3)'} data-layer={'rgba(0,0,0,0.3)'} onClick={this.copyToClipboard}></Box>
          <Box bg={'rgba(0,0,0,0.4)'} data-layer={'rgba(0,0,0,0.4)'} onClick={this.copyToClipboard}></Box>
          <Box bg={'rgba(0,0,0,0.5)'} data-layer={'rgba(0,0,0,0.5)'} onClick={this.copyToClipboard}></Box>
        </Container>
      </div>
    )
  }
}

export default Shades;