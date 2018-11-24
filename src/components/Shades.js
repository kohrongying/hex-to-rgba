import React from 'react';
import styled from 'styled-components';
import Shade from './Shade';

const Container = styled.div`
  background-color: transparent;
  height: 100vh;
  width: 10%;
  position: absolute;
  left: ${props => props.left}
  top: 0;
`;

const Shades = (props) => {
  return (
    <div>
      <Container left={0}>
        <Shade bg={'rgba(255,255,255,0.1)'} rgba={props.rgba} copyHex={props.copyHex} />
        <Shade bg={'rgba(255,255,255,0.2)'} rgba={props.rgba} copyHex={props.copyHex} />
        <Shade bg={'rgba(255,255,255,0.3)'} rgba={props.rgba} copyHex={props.copyHex} />
        <Shade bg={'rgba(255,255,255,0.4)'} rgba={props.rgba} copyHex={props.copyHex} />
        <Shade bg={'rgba(255,255,255,0.5)'} rgba={props.rgba} copyHex={props.copyHex} />
      </Container>
      <Container left={'90%'}>
        <Shade bg={'rgba(0,0,0,0.1)'} rgba={props.rgba} copyHex={props.copyHex} />
        <Shade bg={'rgba(0,0,0,0.2)'} rgba={props.rgba} copyHex={props.copyHex} />
        <Shade bg={'rgba(0,0,0,0.3)'} rgba={props.rgba} copyHex={props.copyHex} />
        <Shade bg={'rgba(0,0,0,0.4)'} rgba={props.rgba} copyHex={props.copyHex} />
        <Shade bg={'rgba(0,0,0,0.5)'} rgba={props.rgba} copyHex={props.copyHex} />
      </Container>
    </div>
  )
}

export default Shades;