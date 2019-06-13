import { call, put } from "redux-saga/effects";

import { Creators as ServiceActions } from "../ducks/service";

import api from "~/services/api";

function* indexService() {
  try {
    const { data } = yield call(api.get, `/projects`);

    yield put(ServiceActions.indexSuccess(data));
  } catch (err) {
    yield put(ServiceActions.indexFail(err.message));
  }
}

function* showService(action) {
  try {
    const { data } = yield call(api.get, `/projects/${action.payload.id}`);
    yield put(ServiceActions.showSuccess(data));
  } catch (err) {
    yield put(ServiceActions.showFail(err.message));
  }
}

export { indexService, showService };
