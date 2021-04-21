import React from 'react';
import { HeaderContainer } from '../containers/header';
import { TitleContainer } from '../containers/title';
import { ChocolateContainer } from '../containers/chocolate';
import { OurMissionContainer } from '../containers/ourMission';

export default function Home() {
  return (
    <>
      <HeaderContainer/>
      <TitleContainer/>
      <ChocolateContainer/>
      <OurMissionContainer/>
    </>
  )
}