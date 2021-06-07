import React from 'react';
import { Footer } from '../components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export function FooterContainer() {
 return (
   <Footer>
    <Footer.Wrapper>
      <Footer.Logo src="./img/icons/chocolate-bar-pieces-blue.png" alt="Chocolate Bar Logo" />
      <Footer.Section>
        <h4>Our Story</h4>
        <ul>
          <li><a href="/">Our Mission</a></li>
          <li>Our Timeline</li>
          <li>Tony's Impact</li>
          <li>Anual FAIR report</li>
        </ul>
      </Footer.Section>
      <Footer.Section>
        <h4>Join In</h4>
        <ul>
          <li><a href="/join">See What You Can Do</a></li>
          <li><a href="/join">Become Serious Friends</a></li>
        </ul>
      </Footer.Section>
      <Footer.Section>
        <h4>ChocoShop</h4>
        <ul>
          <li><a href="/chocoShop">Big Bars</a></li>
          <li><a href="/chocoShop">Small Bars</a></li>
          <li><a href="/chocoShop">Tiny Tony's</a></li>
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
          <li><a className="socialMedia" href="https://www.facebook.com/TonysChocolonelyUS/"><FacebookIcon fontSize="large"/></a></li>
          <li><a className="socialMedia" href="https://twitter.com/TonysChocoUS/"><TwitterIcon fontSize="large"/></a></li>
          <li><a className="socialMedia" href="https://www.instagram.com/tonyschocolonely_us/"><InstagramIcon fontSize="large"/></a></li>
        </ul>
      </Footer.Section>
    </Footer.Wrapper>
   </Footer>
 )
}
