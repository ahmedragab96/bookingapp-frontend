import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../../apollo/requests/authRequests';

const ProfileScreen: React.FC = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  console.log(data);

    return (
      <div style={{ marginTop: 300}}>
        <h1>hello Ahmed</h1>
      </div>
    );
  }

export default ProfileScreen;