import React from 'react';
import { images } from '../../assests';
import HomeCard from '../../components/HomeCard';
import styles from './styles.module.scss';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENTS } from '../../apollo/requests/eventsRequests';

const EventsScreen: React.FC = () => {
  const {data , loading , error} = useQuery(GET_EVENTS);

  if (loading) {
    return <div>
      Loading....
    </div>
  }

  if (error) {
    return (
      <div>
        Error....
      </div>
    );
  }
  console.log('Events', data.events);
  return (
    <div
      style={{
        marginTop: '70px',
      }}
    >
      Events Here !!!!
    </div>
  );
}

export default EventsScreen;