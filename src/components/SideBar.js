import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Cross }  from '../svg/cross.svg';
import { checkDarkMode, hex2rgba } from '../helpers';

const Drawer = styled.div`
  height: 100vh;
  position: absolute;
  background: white;
  left: 0;
  width: 30vh;
  overflow: hidden;
  transition: all 0.5s ease-in-out; 
  z-index: 999;
`

const Container = styled.div`
  height: calc(91% - 15px);
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px;
`

const EmptyContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`

const TitleContainer = styled(Container)`
  height: 15px;
  flex-direction: row;
  justify-content: space-between;
`

const Color = styled.div`
  flex: 1;
  background: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  color: ${props => props.darkMode ? "white" : "black"};
`

const Link = styled.a`
  text-decoration: none;
  color: black;
`

const styles = {
  cross: {
    width: 20,
    height: 20,
  }
}

const SideBar = (props) => {
  return (
    <Drawer>
      <TitleContainer>
        <Link href={process.env.PUBLIC_URL+'/my-palette'}>Open Palette</Link>
        <Cross style={styles.cross} onClick={props.close} />
      </TitleContainer>
      { props.myPalette.length === 0 ? <EmptyContainer>Palette is empty</EmptyContainer> : 
        (<Container>
        { props.myPalette.map((item, index) =>{
          return (
            <Color darkMode={checkDarkMode(hex2rgba(item))} bg={item} key={index}>{item}</Color>
          )
        })}
        </Container>)
      }
    </Drawer>
  )    
}

export default SideBar;