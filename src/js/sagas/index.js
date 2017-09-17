import { take, put, call, fork, select, takeEvery, all } from '../../../../src/effects'
import * as actions from '../actions/time-actions'
import { getTimeFrame } from '../reducers'
import { timeFrame } from '../services'

export function* getFrames() {
  const frames = yield call(timeFrame.getTimeFrame)
  yield put(actions.receiveTimeFrame(frames))
}

export default function* root() {
  yield all([
    fork(getFrames),
  ])
}
