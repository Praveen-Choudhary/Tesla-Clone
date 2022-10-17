// import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
// import { styled } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core'
import Section from './Section'

const Container = styled.div``


function Home() {
  return (
    
    <Container>
        <Section
          model = "Model 3"
          description = "Order Online for Touchless Delivery"
          LeftBtn = "Custom Order"
          RightBtn = "Existing Inventory"
          BackgroundImg = "model-3.jpg"
        />
        <Section
          model = "Model Y"
          description = "Order Online for Touchless Delivery"
          LeftBtn = "Custom Order"
          RightBtn = "Existing Inventory"
          BackgroundImg = "model-y.jpg"
        />
        <Section
          model = "Model S"
          description = "Order Online for Touchless Delivery"
          LeftBtn = "Custom Order"
          RightBtn = "Existing Inventory"
          BackgroundImg = "model-s.jpg"
        />

        <Section 
          model = "Model X"
          description = "Order Online for Touchless Delivery"
          LeftBtn = "Custom Order"
          RightBtn = "Existing Inventory"
          BackgroundImg = "model-x.jpg"
        />

        <Section
          model = "SolarPanels"
          description = "Lowest Cost Solar Panels in America"
          LeftBtn = "Order Now"
          RightBtn = "Learn More"
          BackgroundImg = "solar-panel.jpg"
        />

        <Section
          model = "Solar Roof"
          description = "Produce Clean Energy from Your Roof"
          LeftBtn = "Order Now"
          RightBtn = "Learn More"
          BackgroundImg = "solar-roof.jpg"
        />

        <Section
          model = "Accessories"
          description = ""
          LeftBtn = "Shop Now"
          BackgroundImg = "accessories.jpg"
        />
        {/* Hello */}
    </Container>
  )
}


export default Home