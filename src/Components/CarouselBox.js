import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import one from '../img/one.jpg'
import two from '../img/two.jpg'
import three from '../img/three.jpg'



export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="tree"  />
          <Carousel.Caption>
            <h2>Frontend разработчик</h2>
            <p>И это мой сайт визитка </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={two} alt="tree"  />
          <Carousel.Caption>
            <h2>Frontend разработчик</h2>
            <p>И это мой сайт визитка</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={three} alt="tree"/>
          <Carousel.Caption>
            <h2>Frontend разработчик</h2>
            <p>И это мой сайт визитка</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
