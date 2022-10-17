import React, { useState } from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
// import CancelIcon from '@mui/icons-material/Cancel';


const Container = styled.div`
  min-height : 60px;
  position : fixed;
  display : flex;
  align-items : center;
  justify-content : space-between;
  padding : 0px 20px;
  top : 0;
  left : 0;
  right : 0;
  z-index :1;

`;

const Menu = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  flex : 1;

  a{
    font-weight : 600;
    text-transform : uppercase;
    padding : 0 10px;
    flex-wrap : nowrap;

  }

  a:hover{
    // border : 2px sol;
    color : black;
    background : grey;
    opacity : 0.90;
    border-radius : 100px;
    scroll-behavior: smooth;
  }

  @media(max-width : 1000px){
    display : none;
  }
`;

const RightMenu = styled.div`
  display : flex;
  align-items : center;

  a{
      font-weight : 600;
      text-transform : uppercase;
      padding : 0 10px;
      flex-wrap : nowrap;
  }


  a:hover{
    // border : 2px sol;
    color : black;
    background : grey;
    opacity : 0.90;
    border-radius : 100px;
    scroll-behavior: smooth;
  }
`;

const BurgerNav = styled.div`
  position : fixed;
  top : 0;
  bottom : 0;
  right : 0; 
  background : white;
  width : 300px;
  z-index : 16;
  list-style : none;
  padding : 20px;
  dispaly : flex;
  flex-direction : column;
  text-align : start;
  transform : ${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition : transform 0.5s ease-in;
  li{
    padding : 15px 0;
    border-bottom : 1px solid rgba(0,0,0,.2);

    a{
      font-weight : 600;
    }
  }


`;


const CloseWrapper = styled.div`
  display : flex;
  justify-content : flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor : pointer;
`

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)

  return (
    <Container>
        <a>
          <img src='/Images/logo.svg' alt='LOGO' />
        </a>
        <Menu>            
              <a href='#'>Model 3</a>
              <a href='#'>Model Y</a>
              <a href='#'>Model S</a>            
              <a href='#'>Model X</a>            
              <a href='#'>Solar  Panel</a>            
              <a href='#'>Solar Roof</a>            
              <a href='#'>Accessories</a>
        </Menu>

        <RightMenu>
            <a href='#'>Shop</a>
            <a href='#'>Account</a>
            <a href='#' onClick={()=> setBurgerStatus(true)}>Menu</a>

              
        </RightMenu>
        <BurgerNav show = {burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=> setBurgerStatus(false)} />
          </CloseWrapper>
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-In</a></li>
          <li><a href='#'>Test Drive</a></li>
          <li><a href='#'>Cyber truck</a></li>
          <li><a href='#'>Roadster</a></li>
          <li><a href='#'>Semi </a></li>
          <li><a href='#'>Charging</a></li>
          <li><a href='#'>Find Us</a></li>
          <li><a href='#'>Support</a></li>
          <li><a href='#'>Investor Relations</a></li>
        </BurgerNav>

    </Container>
  )
}

export default Header