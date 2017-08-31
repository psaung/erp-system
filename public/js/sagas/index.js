import {
  ApiSaga
} from './api-saga'

export default function* rootSaga() {
  yield all([
    ApiSaga(),
  ])
}
