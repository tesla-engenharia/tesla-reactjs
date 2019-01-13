import { all, takeLatest } from 'redux-saga/effects';

import { indexPosts } from './blog';
import { Types as BlogTypes } from '../ducks/blog';

import { logar, recuperar, alterar } from './login';
import { Types as LoginTypes } from '../ducks/login';

import { create } from './user';
import { Types as UserTypes } from '../ducks/user';

export default function* rootSaga() {
  yield all([
    takeLatest(BlogTypes.INDEX_REQUEST, indexPosts),
    takeLatest(LoginTypes.AUTH_REQUEST, logar),
    takeLatest(LoginTypes.FORGOT_PASSWORD_REQUEST, recuperar),
    takeLatest(LoginTypes.RESET_PASSWORD_REQUEST, alterar),
    takeLatest(UserTypes.CREATE_REQUEST, create),
  ]);
}
