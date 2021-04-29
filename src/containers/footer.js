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
          <li><a href="#WhatYouCanDo">See What You Can Do</a></li>
          <li><a href="#BecomeFriends">Become Serious Friends</a></li>
        </ul>
      </Footer.Section>
      <Footer.Section>
        <h4>ChocoShop</h4>
        <ul>
          <li><a href="#BigBars">Big Bars</a></li>
          <li><a href="#SmallBars">Small Bars</a></li>
          <li><a href="#TinyTonys">Tiny Tony's</a></li>
          <li><a href="#StoreLocator">Store Locator</a></li>
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
          <li><a href="#BigBars">Facebook</a></li>
          <li><a href="#BigBars">Twitter</a></li>
          <li><a href="#BigBars">Instagram</a></li>
        </ul>
      </Footer.Section>
   </Footer>
 )
}
