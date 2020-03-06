import React from 'react';
import ImageWithTitle from './image-with-title.js';
import "./carousel.css"

const Carrousel = () => {
  return (
    <ul className="carousel">
      <li><ImageWithTitle url={require(`../images/pic1.jpg`)} key={1} description="Person Running" activity="running"/></li>
  	  <li><ImageWithTitle url={require(`../images/pic2.jpg`)} key={2} description="People on tree" activity="hiking" /></li>
  	  <li><ImageWithTitle url={require(`../images/pic3.jpg`)} key={3} description="Person lifting weights" activity="weight lifting" /></li>
  	  <li><ImageWithTitle url={require(`../images/pic4.jpg`)} key={4} description="Athlete rock climbing" activity="rock climbing" /></li>
  	  <li><ImageWithTitle url={require(`../images/pic5.jpg`)} key={5} description="Group running" activity="marathon" /></li>
  	  <li><ImageWithTitle url={require(`../images/pic6.jpg`)} key={6} description="basketball in court" activity="Basketball" /></li>
    </ul>
  );
}

export default Carrousel
