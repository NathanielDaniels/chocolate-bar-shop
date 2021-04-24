import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
 return (
   <Footer>
      <Footer.Logo src="./img/icons/chocolate-bar-pieces-blue.png" alt="Chocolate Bar Logo" />
      <Footer.Section>
      <h4>Our Story</h4>
        <ul>
        <li><a href="#OurMission">Our Mission</a></li>
        <li><a href="#OurTimeline">Our Timeline</a></li>
        <li><a href="#TonysImpact">Tony's Impact</a></li>
        <li><a href="#AnualReports">Anual FAIR report</a></li>
        </ul>
      </Footer.Section>
      <Footer.Section>
      <h4>Join In</h4>
        <ul>
          <li>See What You Can Do</li>
          <li>Become Serious Friends</li>
        </ul>
      </Footer.Section>
      <Footer.Section>
      <h4>ChocoShop</h4>
        <ul>
          <li>Big Bars</li>
          <li>Small Bars</li>
          <li>Tiny Tony's</li>
          <li>Store Locator</li>
        </ul>
      </Footer.Section>
      <Footer.Section>
      <h4>Other Stuff..</h4>
        <ul>
          <li>Team Tony's</li>
          <li>Careers</li>
          <li>Freequently Asked Questions</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </Footer.Section>
      <Footer.Section>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </Footer.Section>
   </Footer>
 )
}
