import React from 'react';
import { OurMission } from '../components'

export function OurMissionContainer() {
  return (
    <OurMission>
      <OurMission.Info>
        <div className="left">
          <h1>Image</h1>
        </div>
        <div className="right">
          <h3>The Problem</h3>
          <p>
            Things aren't being shared evenly in the chocolate supply chain. The chain starts with millions of farmers who produce cocoa and ends with the billions of consumers who enjoy chocolate. But what about the bit in between? This section is dominated by a handful of chocolate giants that profits from keeping the cocoa purchasing price as low as possible. As a result, farmers are forced to live in poverty.. leading to child labor and slavery.
          </p>
        </div>
      </OurMission.Info>
      <OurMission.Info>
       <div className="right">
          <h3>What?! Modern Slaver?</h3>
          <p>
            Right now there is slavery on cocoa farms in West Africa. This is a result of the unequally divided cocoa chain. Tony’s Chocolonely exists to change that. Illegal child labor and modern slavery are against the law - it needs to stop.
          </p>
        </div>
        <div className="left">
          <h1>Image</h1>
        </div>
      </OurMission.Info>
      <OurMission.Info>
        <div className="left">
          <h1>Image</h1>
        </div>
        <div className="right">
          <h3>Tony’s route to 100% <br/>slave-free chocolate</h3>
          <p>
           Our vision: 100% slave-free chocolate. Not just our chocolate, but all chocolate worldwide. How we are going to achieve that? It won't be easy. And it’s pretty complex. But we will accomplish it with the help of Tony’s roadmap. Our roadmap has 3 pillars and shows us the way to 100% slave-free chocolate.
          </p>
        </div>
      </OurMission.Info>
    </OurMission>
  )
}

