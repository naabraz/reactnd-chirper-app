import { RECEIVE_USERS } from '../actions/users'

export default function user (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state, //gets everything state has
        ...action.users
      }
    default:
      return state
  }
}