import React, {useState, useEffect} from 'react';
import { Header } from '../components'

// const myRef = React.createRef()
// console.log(myRef)

export function HeaderContainer() {
  // const [activeMenu, setActiveMenu] = useState('');

  // useEffect(() => {
  //   setActiveMenu('active')
  // },[])

  // if (activeMenu) {
  //   setActiveMenu("active")
  // }

  // function removeActive() {
  //   return setActiveMenu(null)
  // }

  return (
    <Header >
      <Header.Menu >
        <Header.MenuList>
          <Header.MenuListItem>
            <a href="/">Our Mission</a>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <a href="/Join">Join In</a>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <a href="/ChocoShop">Chocoshop</a>
          </Header.MenuListItem>
        </Header.MenuList>
      </Header.Menu>
    </Header>
  )
}