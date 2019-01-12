import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* logar(action) {
  try {
    const response = yield call(api.post, '/sessions', {
      email: action.payload.email,
      password: action.payload.password,
    });

    const { token } = response.data;

    localStorage.setItem('@Tesla:token', token);

    yield put(LoginActions.authSuccess(token));
  } catch (err) {
    console.tron.log(err);
    const { data } = err.response;
    if (data.error) {
      yield put(LoginActions.authFailed(err.response.data.error.message));
    } else {
      yield put(LoginActions.authFailed('Verifique suas credenciais'));
    }
  }
}
