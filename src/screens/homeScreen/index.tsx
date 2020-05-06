import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { images } from '../../assests';
import HomeCard from '../../components/HomeCard';
import styles from './styles.module.scss';
import { Parallax, Background } from 'react-parallax';
import ParallaxWrapper from '../../components/parallax';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();
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
            title: 'Sports Events',
            content: 'you can book different Sports Events, from car races and bike races events to olympics games',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => { history.push('/events');  }
            }]
          })}
          {HomeCard({
            image: images.eventTwo,
            title: 'Cultural Events',
            content: 'Cultural and religious Events are a big part in any country, with us you can add your events here and make it easier for people to book it',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => { history.push('/events'); }
            }]
          })}
          {HomeCard({
            image: images.eventThree,
            title: 'Modern Events',
            content: 'Modern Events include a lot of things: concerts , festivals and even normal small gatherings. Add your events here and let people know about them',
            actions: [{
              buttonText: 'Learn More',
              onClick: () => { history.push('/events'); }
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