import React from 'react';
import { HeaderContainer } from '../containers/header';
import { TitleContainer } from '../containers/title';
import { ChocolateContainer } from '../containers/chocolate';
import { OurMissionContainer } from '../containers/ourMission';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer/>
      <TitleContainer/>
      <ChocolateContainer/>
      <OurMissionContainer/>
      <FooterContainer/>
    </>
  )
}