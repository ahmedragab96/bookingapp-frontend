import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { images } from '../../assests';


const HomeScreen = () => {
  return (
    <div>
        <Carousel
          infinite
          keepDirectionWhenDragging
          autoPlay={4000}
          animationSpeed={1000}
          dots
        >
          <img src={images.eventOne} />
          <img src={images.eventTwo} />
          <img src={images.eventThree} />
          <img src={images.eventFour} />
        </Carousel>
        <div>
          <p>Hello in the website!!</p>
        </div>
    </div>
  );
}

export default HomeScreen;