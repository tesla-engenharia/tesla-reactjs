import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* attempt(action) {
  const response = yield call(api.post, '/sessions', {
    email: action.payload.email,
    password: action.payload.password,
  });

  const { token } = response.data;

  yield put(LoginActions.authSuccess(token));
}
