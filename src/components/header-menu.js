import React from 'react';
import Dropdown from './dropdown';
import Carousel from "../components/carousel"
import "./header-menu.css"

const HeaderMenu = (props) => {
  let categories;
  categories = props.data.category.map(category => <Dropdown name={category.name} key={category.id} subcategories={category.subcategory} />);

  return (
    <div className="header-menu">
      <Carousel/>
      <ul className="sub-menu">
        {categories}
      </ul>
    </div>
  );
}

export default HeaderMenu
