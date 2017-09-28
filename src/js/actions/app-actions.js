import {
  SHOW_LOG,
  LOG_FINISHED, 
} from './../constants/app-types'

export function showLogMsg(message, modifier = 'danger') {
  console.log(message, modifier)
  return {
    type: SHOW_LOG,
    message: {
      message,
      modifier,
    }
  }
}

export function hideMsg() {
  return {
    type: LOG_FINISHED
  }
}

export function showLog(msg, modifier) {
  showLogMsg(msg, modifier); 
}
