import React from 'react'
import { Container, Pane, Title, SubTitle, Image, Item, Inner } from './styles/hero'


const Hero = ({children, direction = 'row' , ...restProps}) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction} >
        {children}
      </Inner>
    </Item>
  )
}

Hero.Container = function HeroContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Hero.Pane = function HeroPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Hero.SubTitle = function HeroSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Hero.Image = function HeroImage({ children, ...restProps }) {
  return <Image {...restProps} />
}

export default Hero
