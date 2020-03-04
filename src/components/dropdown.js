import React, { Component } from 'react';
import Submenu from './submenu';



export default class Dropdown extends Component {

  state = {
    isExpanded:true
  };

  toggleBox = () => {
  this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };


  render(props) {
    return (
       <button onClick={this.toggleBox}>
         <li>
           {this.props.name}
           { (this.state.isExpanded ?
             <ul>
              <Submenu data={this.props.subcategories} />
             </ul>
             :
             null
           )}
         </li>
      </button>
    );
  }
}

{/*
  <ul>
    {this.props.data.category.map(category =>
         <button key={category.id} onClick={this.toggleBox}>
           <li>
            {category.name}
            <ul>
              {category.subcategory.map(subcategory =>
                <li className={this.state.isExpanded ? 'expanded': 'hidden'}> {subcategory.productType}</li>
              )}
            </ul>
          </li>
        </button>
     )}
  </ul>
*/}
