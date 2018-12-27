import { takeLatest, put, call, select } from 'redux-saga/effects';
import { fetchCollection, addCollection } from '../api/colections';
import history from '../../history';

function* fetchCollectionSaga() {
  try {
    const response = yield call(fetchCollection);
    const collections = response.body;
    yield put({ type: 'FETCH_COLLECTION_SUCCESS', collections });
  } catch (e) {
    yield put({ type: 'FETCH_COLLECTION_FAILURE' });
    return;
  }
}

function* addCollectionSaga(action) {
  const state = yield select();
  const userId = yield state.auth.userId;
  try {
    const response = yield call(addCollection, {
      ...action.formValues,
      userId,
    });
    const collection = response.body;
    yield put({ type: 'ADD_COLLECTION_SUCCESS', collection });
  } catch (e) {
    yield put({ type: 'ADD_COLLECTION_FAILURE' });
    yield call(history.push, '/redirect');
    return;
  }
}

export default [
  takeLatest('FETCH_COLLECTION', fetchCollectionSaga),
  takeLatest('ADD_COLLECTION', addCollectionSaga),
];
