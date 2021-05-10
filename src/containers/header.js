import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from '../components';

export function HeaderContainer() {
  // const [activePage, setActivePage] = useState('mission');

  // useEffect(() => {
  //   console.log("active Page: ", activePage)
  // }, [activePage])

  return (
    <Header>
      <Header.Menu>
        <Header.MenuList>
          <Header.MenuListItem>
            <NavLink 
              exact to="/"
              activeClassName="active" 
              // activeStyle={{
              //   // fontWeight: "bold",
              //   color: "#fff"
              // }}
            >
              Mission
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              to="/Join"
              activeClassName="active" 
              // activeStyle={{
              //   // fontWeight: "bold",
              //   color: "#fff"
              // }}
            >
              Join In
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              to="/ChocoShop"
              activeClassName="active" 
              // activeStyle={{
              //   // fontWeight: "bold",
              //   color: "#fff"
              // }}
            >
              Chocoshop
            </NavLink>
          </Header.MenuListItem>

          {/* <Header.MenuListItem>
            <Header.MenuLink 
              active={ activePage === 'join' ? 'true' : 'false' } 
              // onClick={ () => setActivePage('join') } 
              onClick={ (e) => {
                // e.preventDefault()
                setActivePage('join')
                console.log(activePage)
              } } 
              href="/Join">
              Join In
            </Header.MenuLink>
          </Header.MenuListItem> */}
  
        </Header.MenuList>
      </Header.Menu>
    </Header>
  )
}