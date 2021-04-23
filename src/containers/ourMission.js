import React from 'react';
import { OurMission } from '../components'

export function OurMissionContainer() {
  return (
    <OurMission>
      <OurMission.Info>
        <div className="left">
          <img src="./img/OurMission/OurMission-sectionOne-blue.jpg" alt="Chocolate Factory"/>
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
          <img src="./img/OurMission/OurMission-sectionTwo-transparent.png" alt="Drawing of people next to a choco plant"/>
        </div>
      </OurMission.Info>
      <OurMission.Info>
        <div className="left">
          <img src="./img/OurMission/OurMission-sectionThree-yellow.png" alt="Our Vision"/>
        </div>
        <div className="right">
          <h3>Tony’s route to 100% slave-free chocolate</h3>
          <p>
           Our vision: 100% slave-free chocolate. Not just our chocolate, but all chocolate worldwide. How we are going to achieve that? It won't be easy. And it’s pretty complex. But we will accomplish it with the help of Tony’s roadmap. Our roadmap has 3 pillars and shows us the way to 100% slave-free chocolate.
          </p>
        </div>
      </OurMission.Info>
       <OurMission.Info>
       <div className="right">
          <h3>Tony’s 5 Sourcing Principles for slave-free cocoa</h3>
          <p>
            With incredibly tasty chocolate, we lead by example to show the world that chocolate can be made differently. By following Tony’s Sourcing Principles for slave-free cocoa, it’s possible to make slave-free chocolate and be commercially successful. 
          </p>
        </div>
        <div className="left">
          <img src="./img/OurMission/OurMission-sectionfour-tran.png" alt="Our Vision"/>
        </div>
      </OurMission.Info>
      <OurMission.Info>
        <div className="left">
          <img src="./img/OurMission/OurMission-sectionFive-tran.png" alt="Our Vision"/>
        </div>
        <div className="right">
          <h3>All hands on deck!</h3>
          <p>
           We can't do it alone. Alone we'll make slave-free chocolate but together we can make all chocolate 100% slave free. The more people who join our mission and share our story, the sooner 100% slave free becomes the norm in chocolate. We all have to roll up our sleeves.. So what action do we expect everyone to take? 
          </p>
        </div>
      </OurMission.Info>
    </OurMission>
  )
}

