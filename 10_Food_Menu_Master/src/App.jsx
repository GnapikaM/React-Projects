import React, { useState } from 'react'
import NavItems from './NavItems'
import Items from './Items'
import Menu from './Menu'
import './styles.scss'

const App = () => {

  const [menuItems, setMenuItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div>
      <header>
        <p>Our Menu</p>
      </header>
      <NavItems activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Items menuItems={menuItems} activeCategory={activeCategory} />
    </div>
  )
}

export default App