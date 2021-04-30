import React, {useState, useEffect} from 'react';
import { Header } from '../components'

// const myRef = React.createRef()
// console.log(myRef)

export function HeaderContainer() {
  const [activeMenu, setActiveMenu] = useState(true);

  useEffect(() => {
    setActiveMenu("active")
  },[])

  // if (activeMenu) {
  //   setActiveMenu("active")
  // }

  function removeActive() {
    return setActiveMenu(null)
  }

  return (
    <Header >
      <Header.Menu >
        <Header.MenuList>
          <li onMouseEnter = {removeActive}>
            <a className={activeMenu} href="/">Our Mission</a>
          </li>
          <li>
            <a href="/Join">Join In</a>
          </li>
          <li>
            <a href="/ChocoShop">Chocoshop</a>
          </li>
        </Header.MenuList>
      </Header.Menu>
    </Header>
  )
}