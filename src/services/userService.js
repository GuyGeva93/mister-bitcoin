import { storageService } from "./storageService"

function signUp(name) {
  let users = storageService.loadFromStorage('users') || []
  const isExist = users.find(user => user.name === name)
  if (isExist) {
    console.log('Name already exist')
  } else {
    users.push(name)
    storageService.saveToStorage('users', users)
  }
}

function logout() {
  storageService.deleteFromStorage('loggedinUser')
}

function addMove(contact, amount) {

}

function getUser() {
  let user = storageService.loadFromStorage('loggedinUser')
  if (!user) {
    user = {
      name: "Ochoa Hyde",
      coins: 100,
      moves: []
    }
    storageService.saveToStorage('loggedinUser', user)
  }
  return user
}

export const userService = {
  signUp,
  logout,
  addMove,
  getUser
}