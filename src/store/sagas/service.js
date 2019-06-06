import { call, put } from "redux-saga/effects";

import { Creators as ServiceActions } from "../ducks/service";

import api from "~/services/api";

function* showService(action) {
  try {
    const { data } = yield call(api.get, `/projects/${action.payload.id}`);
    yield put(ServiceActions.showSuccess(data));
  } catch (err) {
    yield put(ServiceActions.showFail(err.message));
  }
}

export { showService };
