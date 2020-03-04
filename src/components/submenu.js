import React from 'react';
import Categories from './categories';


const Submenu = (props) => {
  let subcategories;
  subcategories = props.data.map(subcategory => <li>{subcategory.productType}</li> );
  return (
    <ul>
      {subcategories}
    </ul>
  );
}

export default Submenu
