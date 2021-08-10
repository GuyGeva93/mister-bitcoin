import { userService } from "../../services/userService"

export function getUser() {
  return dispatch => {
    const loggedinUser = userService.getUser()
    dispatch({ type: 'SET_USER', loggedinUser })
  }
}

export function logout(){
  return dispatch => {
    userService.logout()
    dispatch({type: 'LOGOUT'})
  }
}