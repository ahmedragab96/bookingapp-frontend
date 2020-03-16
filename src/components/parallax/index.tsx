import React, { FunctionComponent } from 'react';
import { Parallax } from 'react-parallax';
import { images } from '../../assests';
import classes from './styles.module.scss';

interface Props {
  backgroundImage: string;
  strength?: number; 
}
const ParallaxWrapper: FunctionComponent<Props> = (props) => {

  return (
    <Parallax
      bgImage={props.backgroundImage}
      strength={ props.strength ? props.strength : 1000}
    >
      <div className={classes.parallaxContentContainer} >
        {props.children}
      </div>
    </Parallax>
  );
}

export default ParallaxWrapper;