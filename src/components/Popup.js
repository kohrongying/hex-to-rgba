import React from 'react';
import styled from 'styled-components';

const Float = styled.div`
  background: #ffffff55;
  padding: 0 5px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Popup = (props) => {
  return (
    <Float>
      Copied {props.hex ? "Hex Code" : "RGB Code" }!
    </Float>
  )
}

export default Popup;