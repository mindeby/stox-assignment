import React from 'react';
import ImageWithTitle from './image-with-title.js';
import "./carousel.css"

const Carrousel = () => {
  return (
    <ul className="carousel">
      <li><a href=""><ImageWithTitle url={require(`../images/pic1.jpg`)} key={1} description="Person Running" activity="running"/></a></li>
  	  <li><a href=""><ImageWithTitle url={require(`../images/pic2.jpg`)} key={2} description="People on tree" activity="hiking" /></a></li>
  	  <li><a href=""><ImageWithTitle url={require(`../images/pic3.jpg`)} key={3} description="Person lifting weights" activity="weight lifting" /></a></li>
  	  <li><a href=""><ImageWithTitle url={require(`../images/pic4.jpg`)} key={4} description="Athlete rock climbing" activity="rock climbing" /></a></li>
  	  <li><a href=""><ImageWithTitle url={require(`../images/pic5.jpg`)} key={5} description="golf ball" activity="golf" /></a></li>
  	  <li><a href=""><ImageWithTitle url={require(`../images/pic6.jpg`)} key={6} description="basketball in court" activity="Basketball" /></a></li>
    </ul>
  );
}

export default Carrousel
