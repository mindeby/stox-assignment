import React from 'react';

const ImageWithTitle = (props) => (
  <div>
    <img src={props.url} alt={props.description}/>
    <span className="image-title">{props.activity}</span>
  </div>
);

export default ImageWithTitle;
