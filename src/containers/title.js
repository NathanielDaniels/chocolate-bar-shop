import React from 'react';
import { Title } from '../components'

export function TitleContainer() {
  return (
    <Title>
      <Title.Top>Crazy About Chocolate</Title.Top>
      <Title.Bottom>
        <span className="serious">Serious</span> About <span className="people">People.</span>
      </Title.Bottom>
      <Title.Quote>"100% slave free becomes the norm in chocolate"</Title.Quote>

      {/* <Title.ChocoBars src="../img/big-bars/bars-straight-bg-transparent.jpg" alt="Chocolate Bars"/> */}
      {/* <Title.ChocoBars /> */}
      {/* <Title.SmallBarOne src="../img/big-bars/dark-milk-chocolate-pretzel-toffee-purple.png" alt="Dark Milk Chocolate Pretzel Toffee Bar" /> */}
      {/* <Title.SmallBarTwo src="../img/big-bars/chocolate-honey-almond-nougat-yellow.png" alt="Chocolate Honey Almond Bar" /> */}
      {/* <Title.SmallBarThree src="../img/big-bars/milk-chocolate-bar-red.png" alt="Milk Chocolate Bar" /> */}
      {/* <Title.SmallBarFour src="../img/big-bars/milk-chocolate-hazelnut-green.png" alt="Milk Chocolate Hazelnut Bar" /> */}
      {/* <Title.SmallBarFive src="../img/big-bars/milk-chocolate-seasalt-caramel-orange.png" alt="Chocolate Sea Salt Caramel Bar" /> */}
    </Title>
  )
}