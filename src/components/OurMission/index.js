import React from 'react';
import { Container, InfoOne } from './styles/ourMission';

export default function OurMission({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

OurMission.InfoOne = function OutMissionInfoOne({children, ...restProps}) {
  return (
    <InfoOne {...restProps}>
      <div className="left">
        <h1>Image</h1>
      </div>
      <div className="right">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint consectetur in earum, incidunt nesciunt exercitationem! Sit, pariatur consequuntur quas quam cumque explicabo, nihil perferendis veritatis nulla odit tempora autem quisquam nesciunt beatae. Consequuntur nihil, ducimus expedita perspiciatis enim id!
        </p>
      </div>
    </InfoOne>
  )
}