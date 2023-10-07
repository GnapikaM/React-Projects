import React from 'react'
import Item from './Item'

const Items = ({ menuItems, activeCategory }) => {

  const filteredMenu = activeCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="item-container">
      {filteredMenu.map((item) => {
        return (
          <Item key={item.id} {...item} />
        )
      })}
    </div>
  )
}

export default Items