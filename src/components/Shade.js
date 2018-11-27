import React from 'react';
import styled from 'styled-components';
import Popup from './Popup';

const Box = styled.div`
  background: ${props => props.bg};
  width: 100%;
  height: 20%;
	z-index: 999;
	display: flex;
`;

class Shade extends React.Component {
  state = {
    showPopup: false
  }
	
	copyToClipboard = (e) => {
		const el = document.createElement('textarea');
		const rgb = this.convertToRGB(this.props.bg)
		el.value = this.props.copyHex ? this.rgb2hex(rgb) : rgb;
		el.setAttribute('readonly', '');
		el.style = {position: 'absolute', left: '-9999px'};
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		this.setState({ showPopup: true })
		setTimeout(() => {this.setState({showPopup:false})}, 1000); 
	}

	rgb2hex = (rgb) => {
		const [r, g, b] = rgb.slice(4,-1).split(',')
													.map(i => parseInt(i).toString(16).padStart(2, '0'))
		return `#${r}${g}${b}`                      
	}
	
	convertToRGB = (layer) => {
		const source = this.convertToRGBAObj(layer)
		const bg = this.convertToRGBAObj(this.props.rgba)
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
		return (
			<Box bg={this.props.bg} onClick={this.copyToClipboard}>
				{this.state.showPopup ? (
					<Popup hex={this.props.copyHex} />
				 ) : null }
			</Box>  			  
		)
	}
}
  
export default Shade;