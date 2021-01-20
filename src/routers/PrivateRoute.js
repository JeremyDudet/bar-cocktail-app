import React from 'react';
import { connect } from 'reac-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = () => {
  return (
    <>
      
    </>
  )
};

const mapStateToProps = (state) => ({
  isAuthenticated: (state.auth.user.uid)
});

export default connect(mapStateToProps)(PrivateRoute);
