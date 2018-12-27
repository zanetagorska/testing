import React from 'react';
import { Fields, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit } = props;

  const renderFields = fields => (
    <div>
      <div className="input-row">
        <input {...fields.firstName.input} type="text" />
      </div>
      <div className="input-row">
        <input {...fields.name.input} type="text" />
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <Fields names={['firstName', 'name']} component={renderFields} />
      <button type="submit">Submit</button>
    </form>
  );
};

const createReduxForm = reduxForm({ form: 'contact' });
export default createReduxForm(ContactForm);
