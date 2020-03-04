import React from 'react';

import NavBar from '../../components/navbar';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import styles from './styles.module.scss';
import Fab from '@material-ui/core/Fab';
import ArrowBackOutlined from '@material-ui/icons/ArrowBackOutlined';
import ArrwowForwardOutlined from '@material-ui/icons/ArrowForwardOutlined';
import {
  useHistory,
} from 'react-router';
import {
  images,
} from '../../assests';
import {
  SIGN_IN,
} from '../../apollo/requests/authRequests';
import { useLazyQuery } from '../../customHooks/lazyQuery';

const LoginScreen = () => {
  const history = useHistory();

  const [runQuery, { loading, data }] = useLazyQuery(SIGN_IN,{
    onCompleted: () => {
      console.log('data ==>', data);
    }
  });

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
              src={images.eventsLogo}
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

                runQuery({
                  email: values.email,
                  password: values.password
                });
              
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  className={styles.formConatiner}
                >
                  <Field
                    placeHolder={'Email : example@example.com'}
                    className={styles.formField}
                    type="email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.errorMessage}
                  />
                  <Field
                    placeHolder={'Password : **********'}
                    className={styles.formField}
                    type="password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={styles.errorMessage}
                  />
                  <div>
                    <p className={styles.forgetPasswordText}>Forgot Password ?</p>
                  </div>
                  <div className={styles.buttonConatiner}>
                    <div className={styles.loginButtn}>
                      <Fab size={'medium'} color="default" aria-label="add" className={styles.fabicon} onClick={() => {
                        history.push('/signup');
                      }}>
                        <ArrowBackOutlined />
                      </Fab>
                      <p className={styles.signupText}>create account</p>
                    </div>
                    <div className={styles.loginButtn}>
                      <p className={styles.signupText}>login</p>
                      <Fab
                        size={'medium'}
                        color="default"
                        aria-label="add"
                        className={styles.fabicon}
                        type='submit'
                      >
                        <ArrwowForwardOutlined />
                      </Fab>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
}

export default LoginScreen;