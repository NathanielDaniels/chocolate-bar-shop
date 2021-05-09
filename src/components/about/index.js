import React from 'react';
import { Container, Inner, Title, Info, StoryImg } from './styles/about';

export default function About({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

About.Inner = function AboutInner({ children, ...restProps }) {
  return <Inner { ...restProps }>{ children }</Inner>
}

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

About.Info = function AboutInfo({ children, ...restProps }) {
  return <Info { ...restProps }>{ children }</Info>
}

About.StoryImg = function AboutStoryImg({ children, ...restProps }) {
  return <StoryImg { ...restProps } />
}



