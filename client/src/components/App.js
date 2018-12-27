import React, { Fragment } from 'react';
import MainPage from './MainPage';
import { Router, Route } from 'react-router-dom';
import history from '../history';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <Route path="/" component={MainPage} />
          <Route path="/redirect" exact component={() => <div>redirect</div>} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
