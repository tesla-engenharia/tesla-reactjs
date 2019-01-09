import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* attempt(action) {
  try {
    const response = yield call(api.post, '/sessions', {
      email: action.payload.email,
      password: action.payload.password,
    });

    const { history } = action.payload;

    const { token } = response.data;

    localStorage.setItem('@Tesla:token', token);

    yield put(LoginActions.authSuccess(token));
    yield call(history.push, '/panel');
  } catch (err) {
    yield put(LoginActions.authFailed(err.response.data.error.message));
  }
}
