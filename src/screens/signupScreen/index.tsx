import React from 'react';
import NavBar from '../../components/navbar';
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
import Fab from '@material-ui/core/Fab';
import ArrowBackOutlined from '@material-ui/icons/ArrowBackOutlined';
import ArrwowForwardOutlined from '@material-ui/icons/ArrowForwardOutlined';
import {
  images,
} from '../../assests';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router';
import * as H from 'history';
import {
  uploadImage,
} from '../../helperFunctions/uploadImage';

interface State {
  image: File;
}

interface Props extends RouteComponentProps {
  history: H.History;
}

class SignupScreen extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);
    this.state = {
      image: new File([], ''),
    }
  }

  setImageState = (image: any) => {
    uploadImage(image, image.name.split('.')[0]);
    this.setState({
      image,
    })
  }

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
              src={images.eventsLogo}
              alt={'logo'}
              className={styles.logoImage}
            />
            <Formik
              initialValues={{ email: '', password: '', confirmPassword: '' }}
              validate={values => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (values.confirmPassword !== values.password) {
                  errors.confirmPassword = 'Passwords don\'t match';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                // this.props.signup({
                //   variables: {
                //     email: values.email,
                //     password: values.password,
                //   }
                // })
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  className={styles.formConatiner}
                >
                  <input
                    id='imageInput'
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      this.setImageState(event.currentTarget.files![0]);
                    }}
                    className={styles.fileInput}
                  />
                  <div
                    onClick={() => {
                      document.getElementById('imageInput')!.click();
                    }}
                    className={styles.fileInputDiv}
                  >
                    <img
                      src={this.state.image.size > 0 ? URL.createObjectURL(this.state.image): images.emptyImage}
                      alt={'profile'}
                      className={styles.imagePreview}
                    />
                  </div>
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
                  <Field
                    placeHolder={'confirm Password : **********'}
                    className={styles.formField}
                    type="password"
                    name="confirmPassword"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className={styles.errorMessage}
                  />
                  <div className={styles.buttonConatiner}>
                    <div className={styles.loginButtn}>
                      <Fab
                        size={'medium'}
                        color="default"
                        aria-label="add"
                        className={styles.fabicon}
                        onClick={() => {
                          this.props.history.push('/login');
                        }}
                      >
                        <ArrowBackOutlined />
                      </Fab>
                      <p className={styles.signupText}>Already Have account ?</p>
                    </div>
                    <div className={styles.loginButtn}>
                      <p className={styles.signupText}>Sign up</p>
                      <Fab size={'medium'} color="default" aria-label="add" className={styles.fabicon} >
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
}

export default graphql(signupQuery, {
  // options: () => ({variables: {email: "hello@gmail.com" , password: "12345678"}}),
  name: 'signup'
})(withRouter(SignupScreen));