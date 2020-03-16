import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { images } from '../../assests';
import HomeCard from '../../components/HomeCard';
import styles from './styles.module.scss';
import { Parallax, Background } from 'react-parallax';
import ParallaxWrapper from '../../components/parallax';

const HomeScreen = () => {
  return (
    <div>
      <ParallaxWrapper
        backgroundImage={images.darkBackground}
      >
        <div style={{
          width: '100%',
          height: '100vh',
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ color: 'red' }}> Hello in the website !!!!!!!!!</h1>
        </div>
      </ParallaxWrapper>

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

      <ParallaxWrapper
        backgroundImage={images.darkBackground}
      >
        <div className={styles.cardsContainer} id={'cards'}>
          {HomeCard({
            image: images.eventOne,
            title: 'Lizard',
            content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => { alert('Events !!!') }
            }]
          })}
          {HomeCard({
            image: images.eventTwo,
            title: 'Lizard',
            content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => { alert('Events !!!') }
            }]
          })}
          {HomeCard({
            image: images.eventThree,
            title: 'Lizard',
            content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => { alert('Events !!!') }
            }]
          })}
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper
        backgroundImage={images.darkBackground}
      >
        <div style={{
          width: '100%',
          height: '70vh',
          backgroundColor: 'white'
        }}>
          <h1 style={{ color: 'red' }}> Hello in the website !!!!!!!!!</h1>
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper
        backgroundImage={images.darkBackground}
      >
        <div style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ color: 'red' }}> Hello in the website !!!!!!!!!</h1>
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper
        backgroundImage={images.darkBackground}
      >
        <div style={{
          width: '100%',
          height: '70vh',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ color: 'red' }}> Hello in the website !!!!!!!!!</h1>
        </div>
      </ParallaxWrapper>
    </div>
  );
}

export default HomeScreen;