import React from 'react';
import { images } from '../../assests';
import {
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

interface HomeCardProps {
  image: string;
  title: string;
  content: string;
  actions: [{
      buttonText: string;
      onClick: () => void;
    }
  ]
}

const HomeCard = (props: HomeCardProps) => {
  return (
    <Paper elevation={2}>

    <Card
      style={{
        maxWidth: 345,
      }}
    >
      <CardActionArea>
        <CardMedia
          style={{
            height: 140
          }}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          justifyContent: 'flex-end'
        }}
      >
        {
          props.actions.map(action => {
            return (
              <Button
                size="small"
                color="primary"
                onClick={action.onClick}
              >
                {action.buttonText}
              </Button>
            );
          })
        }
      </CardActions>
    </Card>
    </Paper>
  );
}

export default HomeCard;