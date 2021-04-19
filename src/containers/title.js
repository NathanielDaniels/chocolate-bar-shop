import React from 'react';
import { Title } from '../components'

export function TitleContainer() {
  return (
    <Title>
      <Title.Top>Crazy About Chocolate</Title.Top>
      <Title.Bottom><span className="serious">Serious</span> About <span className="people">People.</span></Title.Bottom>
      <Title.Quote>"100% slave free becomes the norm in chocolate"</Title.Quote>
    </Title>
  )
}