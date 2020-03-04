import React, { Component } from 'react';


export default class Dropdown extends Component {

  state = {
    isExpanded:true
  };

  toggleBox = () => {
  this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  console.log(this.state.isExpanded)
  };


  render(props) {
    return (
      <div>
        <ul>
          {this.props.data.category.map(category =>
               <button key={category.id} onClick={this.toggleBox} className={this.state.isExpanded ? 'expanded': 'contracted'}>
                 <li>
                  {category.name}
                  <ul>
                    {category.subcategory.map(subcategory =>
                      <li>{subcategory.productType}</li>
                    )}
                  </ul>
                </li>
              </button>
           )}
              {/*<div className={this.state.isExpanded ? 'front': 'back'}  </div>*/}
        </ul>
      </div>
    );
  }
}
