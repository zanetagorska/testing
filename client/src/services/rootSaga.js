import { all } from 'redux-saga/effects';
import collections from './sagas/collections';

export default function* rootSaga() {
  yield all([...collections]);
}
