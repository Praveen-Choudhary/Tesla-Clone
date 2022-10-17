import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    // background-image : url('/Images/model-s.jpg');
    display : flex;
    flex-direction : column;
    justify-content : space-between; // Vertical Alignment
    align-items :center; // Horizontal Alignment
    scroll-behavior: smooth;

    background-image : ${

      props => `url("/Images/${props.bgImg}")`
    }
    
`
const ItemText = styled.div`
  padding-top :15vh;
  text-align : center;
`
const ButtonGroup = styled.div`
  display :flex;
  margin-bottom : 30px;
  @media (max-width : 768px){
    flex-direction : column;
  }
  
`

const LeftButton = styled.div`
  background-color : rgba(23,26,32,0.8);
  height :40px;
  width : 256px;
  color : white;
  display : flex;
  justify-content : center;
  align-items : center;
  border-radius : 100px;
  opacity : 0.85;
  text-transform : uppercase;
  font-size : 12px;
  cursor : pointer;
  margin : 8px;

  
`

const RightButton = styled(LeftButton)`
  background : white;
  opacity : 0.85;
  color :black;
`

const DownArrow = styled.img`
  margin-top : 20px;
  height :40px;
  overflow-x : hidden;
  animation : animateDown infinite 1.5s;
`

const Button = styled.div`
`

function Section(props) {
  return (
    <Wrap bgImg = {props.BackgroundImg}>
        <Fade>
        <ItemText>
            <h1>{props.model}</h1>
            <p>{props.description}</p>
          </ItemText>
        </Fade>

        <Button>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>
                {props.LeftBtn}
              </LeftButton>
              {props.RightBtn &&
                <RightButton>
                {props.RightBtn}
              </RightButton>
              }
            </ButtonGroup>
          </Fade>
          <DownArrow src='/Images/down-arrow.svg' />
        </Button>
    </Wrap>
  )
}

export default Section