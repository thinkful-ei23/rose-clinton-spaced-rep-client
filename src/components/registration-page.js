import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './registration-page.css';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <main className="register">
      <h2>Register to play Un-Hidden Figures!</h2>
      <RegistrationForm />
      <p>Already have an account? <Link to="/">Log in here</Link></p>
    </main>
    );
  }
  
  const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
  });
  
  export default connect(mapStateToProps)(RegistrationPage);
  