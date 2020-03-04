import React from 'react';
import Dropdown from './dropdown';

const Categories = (props) => {
  let categories;
  categories = props.data.category.map(category => <Dropdown name={category.name} key={category.id} subcategories={category.subcategory} />);

  return (
    <div>
      {categories}
    </div>
  );
}

export default Categories
