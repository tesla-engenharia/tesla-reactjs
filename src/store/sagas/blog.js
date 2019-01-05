import { call, put } from 'redux-saga/effects';

import * as moment from 'moment';
import 'moment/locale/pt-br';

import api from '~/services/api';

import { Creators as BlogActions } from '../ducks/blog';

export function* indexPosts(action) {
  const { data } = yield call(api.get, `/posts?page=${action.payload.page}`);

  console.tron.log(data);

  moment.locale('pt-BR');

  data.data.map((post) => {
    console.tron.log(post.created_at);
    return (post.fromNow = moment(post.created_at).fromNow());
  });

  yield put(BlogActions.indexSuccess(data));
}
