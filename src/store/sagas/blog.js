import { call, put } from "redux-saga/effects";
import readingTime from "reading-time";

import * as moment from "moment";
import "moment/locale/pt-br";

import api from "~/services/api";

import { Creators as BlogActions } from "../ducks/blog";
moment.locale("pt-BR");

function* indexPosts(action) {
  try {
    const { data } = yield call(api.get, `/posts?page=${action.payload.page}`);

    data.data.map(post => {
      return (post.fromNow = moment(post.created_at).fromNow());
    });

    yield put(BlogActions.indexSuccess(data));
  } catch (err) {
    yield put(BlogActions.indexFail(err.message));
  }
}

function* showPost(action) {
  try {
    const { data } = yield call(api.get, `/posts/${action.payload.id}`);

    data.fromNow = moment(data.created_at).fromNow();

    let { text } = readingTime(data.content);
    text = text.replace("read", "de leitura");
    data.readingTime = text;

    yield put(BlogActions.showSuccess(data));
  } catch (err) {
    yield put(BlogActions.showFail(err.message));
  }
}

function* createPost(action) {
  try {
    yield call(api.post, "/posts", action.payload.post, {
      headers: {
        Authorization: "bearer " + localStorage.getItem("@Tesla:token")
      }
    });

    yield put(BlogActions.createSuccess());
  } catch (err) {
    yield put(BlogActions.createFail(err.message));
  }
}

export { indexPosts, showPost, createPost };
