import { 
  CounterSaga, 
  watchIncrementSaga,
} from './counter-saga'

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementSaga(),
  ])
}


