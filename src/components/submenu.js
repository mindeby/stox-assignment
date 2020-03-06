import React from 'react';
import "./header-menu.css"

const Submenu = (props) => {
  let subcategories;
  subcategories = props.data.map((subcategory, i) => <li key={i}>{subcategory.productType} <span className="product-count">{subcategory.items} products</span></li> );
  return (
    <ul>
      {subcategories}
    </ul>
  );
}

export default Submenu
