import React from 'react';
import { Colors } from '../colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div = styled.div`
  margin: 10px;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
`

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  color: white;
`

const InvalidColor = (props) => {
  return(
    <Wrapper>
      <Div>
        The color {props.color} does not exist.
      </Div>
      <Div>
        Perhaps you will be interested in these instead? 
      </Div>
      <Container>
        {Object.keys(Colors).map((color, index) => {
          return(
            <Button bg={Colors[color][4]} href={color} key={index}>
              {color}
            </Button>
          )
        })}
      </Container>
    </Wrapper>
  )
}

export default InvalidColor;