import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCollection, addCollection } from '../services/redux/collections';
import ContactForm from './ContactForm';
import GoogleAuth from './GoogleAuth';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollection();
  }

  renderList = () =>
    this.props.collections.map((collection, key) => (
      <li key={key}>
        <div>
          {collection.name}
          {this.checkAdmin(collection)}
        </div>
      </li>
    ));

  checkAdmin = collection => {
    if (collection.userId === this.props.userId) {
      return <div>Edit/Remove</div>;
    }
  };

  submit = values => {
    this.props.addCollection(values);
  };

  render() {
    return (
      <Fragment>
        <GoogleAuth />
        <ContactForm onSubmit={this.submit} />
        <ul>{this.renderList()}</ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  collections: state.collections,
  userId: state.auth.userId,
});

export default connect(
  mapStateToProps,
  { fetchCollection, addCollection }
)(MainPage);
