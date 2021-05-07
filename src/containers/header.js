import React, {useState, useEffect} from 'react';
import { Header } from '../components';

export function HeaderContainer() {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    console.log("active Page: ", activePage)
  }, [activePage])

  return (
    <Header>
      <Header.Menu>
        <Header.MenuList>
          <Header.MenuListItem>
            <Header.MenuLink 
              active={ activePage === 'mission' ? 'true' : 'false' } 
              onClick={ () => setActivePage('mission') } 
              href="/"
              > 
              Our Mission
            </Header.MenuLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <Header.MenuLink 
              active={ activePage === 'join' ? 'true' : 'false' } 
              onClick={ () => setActivePage('join') } 
              href="/Join">
              Join In
            </Header.MenuLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <Header.MenuLink 
              active={ activePage === 'chocoShop' ? 'true' : 'false' } 
              onClick={ () => setActivePage('chocoShop') } 
              href="/ChocoShop">
              Chocoshop
            </Header.MenuLink>
          </Header.MenuListItem>
        </Header.MenuList>
      </Header.Menu>
    </Header>
  )
}