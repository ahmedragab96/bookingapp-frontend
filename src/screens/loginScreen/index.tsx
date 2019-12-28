import React from 'react';

import styles from './styles';
import NavBar from '../../components/navbar';

class LoginScreen extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      <h1
        style={styles.h1Style}
      >
        still works!!
      </h1>
      </div>
    );
  }
}

export default LoginScreen;