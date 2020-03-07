import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { images } from '../../assests';
import HomeCard from '../../components/HomeCard';
import styles from './styles.module.scss';


const HomeScreen = () => {
  return (
    <div style={{
      backgroundColor: 'rgba(121, 50, 187, 0.5)'
    }}>
        <Carousel
          infinite
          keepDirectionWhenDragging
          autoPlay={4000}
          animationSpeed={1000}
        >
          <img src={images.eventOne} />
          <img src={images.eventTwo} />
          <img src={images.eventThree} />
          <img src={images.eventFour} />
        </Carousel>
        <div
          style={{
            height: '60vh'
          }}
        >
        <div className={styles.cardsContainer}>
          {HomeCard({
            image: images.eventOne,
            title: 'Lizard',
            content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => {alert('Events !!!')}
            }]
          })}
          {HomeCard({
            image: images.eventTwo,
            title: 'Lizard',
            content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => {alert('Events !!!')}
            }]
          })}
          {HomeCard({
            image: images.eventThree,
            title: 'Lizard',
            content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => {alert('Events !!!')}
            }]
          })}
        </div>
        </div>
    </div>
  );
}

export default HomeScreen;