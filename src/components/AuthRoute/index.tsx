import React, {
  ComponentClass, FunctionComponent,
} from 'react';
import {
  Redirect, Route,
} from 'react-router-dom';

interface Props {
  component: ComponentClass<any> | FunctionComponent<any>;
  hasPermission: boolean;
  fallbackRoute: string;
  path: string;
  exact: boolean;
}

const AuthenticationRoute: React.FC<Props> = (props: Props) => {
    const {
      component,
      hasPermission,
      fallbackRoute,
      path,
      exact,
    } = props;

    console.log('not heree', hasPermission);

    if (!hasPermission) {
      console.log('hereeeee');
      return <Redirect to={fallbackRoute} />;
    }

    return (
      <Route
        exact={exact}
        path={path}
        component={component}
      />
    );
}

export default AuthenticationRoute;
