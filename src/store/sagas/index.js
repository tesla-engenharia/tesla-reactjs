import { all, takeLatest } from 'redux-saga/effects';

import { indexPosts } from './blog';

import { Types } from '../ducks/blog';

export default function* rootSaga() {
  yield all([takeLatest(Types.INDEX_REQUEST, indexPosts)]);
}
