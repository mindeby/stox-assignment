import React, { Component } from 'react';
import Submenu from './submenu';



export default class Dropdown extends Component {

  state = {
    isExpanded:false
  };

  toggleBox = () => {
  this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };


  render(props) {
    return (
      <span>
        <li onClick={this.toggleBox} className="category-title">
          {this.props.name}
        </li>
          { (this.state.isExpanded ?
            <Submenu data={this.props.subcategories} />
            :
            null
          )}
      </span>
    );
  }
}
