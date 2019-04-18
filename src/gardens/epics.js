import { put, takeEvery } from 'redux-saga/effects'
import { getGardens } from "../api"
import actions from "../gardens/constants"

function* fetchGardens() {
    try {
       const gardens = yield getGardens()
       yield put({type: actions.GARDENS_FETCHED, payload: gardens.data });
    } catch (e) {
       yield put({type: actions.GARDENS_FAILED, message: e.message});
    }
 }

 export default function* rootSaga() {
    yield takeEvery(actions.FETCH_GARDENS, fetchGardens)
  }