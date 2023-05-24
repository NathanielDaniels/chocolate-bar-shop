import React from "react";
import { Chocolate } from "../components";

export function ChocolateContainer() {
  return (
    <Chocolate>
      {/* <Chocolate.Bars src="../img/big-bars/bars-straight-bg-transparent.jpg" alt="Chocolate Bars"/> */}
      <Chocolate.Bars />
      <Chocolate.SmallBarOne
        src="../img/big-bars/dark-milk-chocolate-pretzel-toffee-purple.png"
        title="Dark Milk Chocolate Pretzel Toffee Bar"
        alt="Dark Milk Chocolate Pretzel Toffee Bar"
      />
      <Chocolate.SmallBarTwo
        src="../img/big-bars/chocolate-honey-almond-nougat-yellow.png"
        alt="Chocolate Honey Almond Bar"
      />
      <Chocolate.SmallBarThree
        src="../img/big-bars/milk-chocolate-bar-red.png"
        alt="Milk Chocolate Bar"
      />
      {/* <Chocolate.SmallFour src="../img/big-bars/milk-chocolate-hazelnut-green.png" alt="Milk Chocolate Hazelnut Bar" /> */}
      {/* <Chocolate.SmallFive src="../img/big-bars/milk-chocolate-seasalt-caramel-orange.png" alt="Chocolate Sea Salt Caramel Bar" /> */}
    </Chocolate>
  );
}
