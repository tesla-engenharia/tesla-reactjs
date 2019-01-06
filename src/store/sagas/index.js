import { all, takeLatest } from 'redux-saga/effects';

import { indexPosts } from './blog';
import { Types as BlogTypes } from '../ducks/blog';

import { attempt } from './login';
import { Types as LoginTypes } from '../ducks/login';

export default function* rootSaga() {
  yield all([
    takeLatest(BlogTypes.INDEX_REQUEST, indexPosts),
    takeLatest(LoginTypes.AUTH_REQUEST, attempt),
  ]);
}
