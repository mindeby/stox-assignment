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
       <button onClick={this.toggleBox}>
         <li>
           {this.props.name}
           { (this.state.isExpanded ?
             <ul className="sub-menu expanded">
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
