export const GET_TIME_FRAME = 'GET_TIME_FRAME'
export const RECEIVE_FRAME = 'RECEIVE_FRAME'

export function getAllTimeFrame() {
  return {
    type: GET_TIME_FRAME
  }
}

export function receiveTimeFrame(frame) {
  return {
    type: RECEIVE_FRAME,
    frame
  }
}
