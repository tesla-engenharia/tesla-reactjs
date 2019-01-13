import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as UserActions } from '../ducks/user';

export function* create({ payload }) {
  try {
    yield call(api.post, '/users', {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      password_confirmation: payload.password,
    });

    yield put(UserActions.createSuccess());
  } catch (err) {
    const { data } = err.response;
    console.tron.log(data);
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      yield put(UserActions.createFailed(element.message));
    }
  }
}
