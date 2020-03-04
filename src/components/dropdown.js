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
          {this.props.data.category.map(function(category, i){
             return (
               <button key={i} onClick={this.toggleBox}>
                 <li>
                  {[ category.name ]}
                </li>
              </button>
            );
           })}
              {/*<div className={this.state.isExpanded ? 'front': 'back'}  </div>*/}
        </ul>
      </div>
    );
  }
}
