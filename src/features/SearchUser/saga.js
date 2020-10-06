import { delay, put, call, takeLatest, all } from "redux-saga/effects";
import { searchUserActions } from "./slice";

const apiKey = process.env.REACT_APP_LOL_API_KEY;

async function fetchUserApi(name) {
  const result = await fetch(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`
  ).then((result) => {
    return result.json();
  });
  return result;
}

export function* fetchUserSaga(action) {
  const { fetchUserFailure, fetchUserSuccess } = searchUserActions;
  try {
    const name = action.payload;
    yield delay(1000);
    const result = yield call(fetchUserApi, name);
    yield put(fetchUserSuccess(result));
  } catch (err) {
    yield put(fetchUserFailure(err));
  }
}

export function* watchFetchUser() {
  const { fetchUserRequest } = searchUserActions;
  yield all([takeLatest(fetchUserRequest.type, fetchUserSaga)]);
}
