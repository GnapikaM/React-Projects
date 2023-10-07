import React from 'react'

const NavItems = ({ activeCategory, setActiveCategory }) => {

  const categories = ['All', 'Breakfast', 'Lunch', 'Shake', 'Fast food'];

  const handleCategory = (category) => {
    setActiveCategory(category);
  }

  return (
    <nav className="navbar">
      <ul className="navitems">
        {categories.map((category) => (
          <li
            key={category}
            className={category === activeCategory ? 'Active' : ''}
            onClick={() => handleCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavItems