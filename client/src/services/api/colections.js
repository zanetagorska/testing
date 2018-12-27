import request from 'superagent';

export const fetchCollection = () =>
  request.get('http://localhost:3001/collections/');

export const addCollection = formValues =>
  request.post('http://localhost:3001/collections/').send(formValues);
