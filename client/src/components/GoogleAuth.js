import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../services/redux/auth';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '988214847514-cdjpsf2s833lilai3ql13ptba20m2r5l.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    console.log(isSignedIn);
    if (isSignedIn) {
      const userId = this.auth.currentUser.get().getId();
      this.props.signIn(userId);
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    const { isSignedIn } = this.props.auth;
    if (!this.auth) {
      return <div>loading...</div>;
    }
    if (isSignedIn) {
      return <button onClick={this.auth.signOut}>Sign out</button>;
    }
    return <button onClick={this.auth.signIn}>Sign in</button>;
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
