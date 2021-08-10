const INITIAL_STATE = {
  loggedinUser: null
}

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        loggedinUser: action.loggedinUser
      }
    case 'LOGOUT':
      return {
        ...state,
        loggedinUser: null
      }
    default:
      return state
  }


}
