import React from 'react';
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
import { useMutation } from '@apollo/react-hooks';

const asyncLocalStorage = {
  setItem: async function (key: string, value: string) {
      await null;
      return localStorage.setItem(key, value);
  },
  getItem: async function (key: string) {
      await null;
      return localStorage.getItem(key);
  }
};

const LoginScreen: React.FC = () => {
  const history = useHistory();
  const [signIn , {data , loading , error} ] = useMutation(
    SIGN_IN,
    {
      async update(cache, { data: { login } }) {
        console.log(login);
        await asyncLocalStorage.setItem('AuthUser' , JSON.stringify(login));
        history.push('/');
      }
    });

  if (loading) {
    return <div> Loading....</div>;
  }

  if (error) {
    return <div> error </div>;
  }

    return (
      <div>
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

                signIn({
                  variables: {
                    email: values.email,
                    password: values.password,
                  }
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