import React from 'react';

import styles from './styles';
import NavBar from '../../components/navbar';
import image from '../../assests/events.jpg';
import logo from '../../assests/eventsLogo.jpg';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from 'formik';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import { signupQuery } from '../../apollo/requests/authRequests';


class LoginScreen extends React.Component<any, any> {

  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ width: '100%', maxHeight: '100vh', height: 'calc(100vh - 64px)', overflow: 'hidden', backgroundImage: `url(${image})`, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', flexDirection: 'column', backgroundRepeat: 'no-repeat' }}>
          <div style={{ width: '27%', height: '70%', backgroundColor: '#332637', marginLeft: 30, borderRadius: 10 }}>
            <img src={logo} style={{ width: '100%', borderRadius: 10 }} />
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
                <Form style={{ display: 'flex', flexDirection: 'column' }}>
                  <Field style={{ borderRadius: 5, margin: 8, padding: 10 }} type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field style={{ borderRadius: 5, margin: 8, padding: 10 }} type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                  <button style={{ borderRadius: 5, margin: 8, padding: 10 }} type="submit" disabled={isSubmitting}>
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