import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { images } from '../../assests';
import HomeCard from '../../components/HomeCard';
import styles from './styles.module.scss';
import { Parallax, Background } from 'react-parallax';

const HomeScreen = () => {
  return (
    <div>
      <Parallax
        bgImage={images.darkBackground}
        strength={1000}
      >
        <div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{
            width: '100%',
            height: '100vh',
            marginTop: '50px'
          }}>
            <h1 style={{color: 'red'}}> Hello in the website !!!!!!!!!</h1>
          </div>
          
          </div>
       </Parallax>
          <Carousel
            infinite
            keepDirectionWhenDragging
            autoPlay={4000}
            animationSpeed={1000}
            itemWidth={2000}
          >
            <img src={images.eventOne} />
            <img src={images.eventTwo} />
            <img src={images.eventFour} />
          </Carousel>

          <Parallax
        bgImage={images.darkBackground}
        strength={1000}
      >
        <div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div className={styles.cardsContainer} id={'cards'}>
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
       </Parallax>
       <Parallax
        bgImage={images.darkBackground}
        strength={1000}
      >
        <div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            width: '100%',
            height: '100vh',
            marginTop: '50px'
          }}>
            <h1 style={{color: 'red'}}> Hello in the website !!!!!!!!!</h1>
          </div>
          </div>
       </Parallax>
          <Parallax
        bgImage={images.darkBackground}
        strength={1000}
      >
        <div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            width: '100%',
            height: '100vh',
            marginTop: '50px'
          }}>
            <h1 style={{color: 'red'}}> Hello in the website !!!!!!!!!</h1>
          </div>
          </div>
       </Parallax>
          <Parallax
        bgImage={images.darkBackground}
        strength={1000}
      >
        <div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
           <div style={{
            width: '100%',
            height: '100vh',
            marginTop: '50px'
          }}>
            <h1 style={{color: 'red'}}> Hello in the website !!!!!!!!!</h1>
          </div>
          </div>
       </Parallax>
    </div>
  );
}

export default HomeScreen;