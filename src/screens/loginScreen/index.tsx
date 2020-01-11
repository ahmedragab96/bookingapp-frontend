import React from 'react';

import NavBar from '../../components/navbar';
import logo from '../../assests/eventsLogo.jpg';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import {
  graphql,
} from 'react-apollo';
// import {flowRight as compose} from 'lodash';
import {
  signupQuery,
} from '../../apollo/requests/authRequests';
import styles from './styles.module.scss';


class LoginScreen extends React.Component<any, any> {
  render() {
    return (
      <div>
        <NavBar />
        <div
          className={styles.screenContainer}
        >
          <div
            className={styles.loginCardConatiner}
          >
            <img
              src={logo}
              alt={'logo'}
              className={styles.logoImage}
            />
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                this.props.signup({
                  variables: {
                    email: values.email,
                    password: values.password,
                  }
                })
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  className={styles.formConatiner}
                >
                  <Field
                    className={styles.formField}
                    type="email"
                    name="email"
                  />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    className={styles.formField}
                    type="password"
                    name="password"
                  />
                  <ErrorMessage name="password" component="div" />
                  <button
                    className={styles.formField}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(signupQuery, {
  // options: () => ({variables: {email: "hello@gmail.com" , password: "12345678"}}),
  name: 'signup'
})(LoginScreen);