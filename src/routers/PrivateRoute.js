import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <>
      {console.log(`Is authenticated? ${isAuthenticated}`)}
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.user, // checking if there is an object - objects are truthy
});

export default connect(mapStateToProps)(PrivateRoute);
