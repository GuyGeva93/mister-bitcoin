import { contactService } from "../../services/contactService"

export function loadContacts() {
  return async (dispatch, getState) => {
    const { filterBy } = getState().contactModule
    try {
      const contacts = await contactService.getContacts(filterBy)
      dispatch({ type: 'SET_CONTACTS', contacts })
    } catch (err) {
      console.log(err)
    }
  }
}

export function loadContact(contactId) {
  return async dispatch => {
    try {
      const contact = (!contactId) ? contactService.getEmptyContact() : await contactService.getContactById(contactId)
      dispatch({ type: 'SET_CONTACT', contact })
    } catch (err) {
      console.log(err)
    }
  }
}

export function saveContact(contact) {
  return async dispatch => {
    try {
      const action = contact._id ? 'UPDATE_CONTACT' : 'SAVE_CONTACT'
      await contactService.saveContact(contact)
      dispatch({ type: action, contact })
    } catch (err) {
      console.log(err)
    }
  }
}

export function removeContact(contactId) {
  return async dispatch => {
    try {
      await contactService.deleteContact(contactId)
      dispatch({ type: 'REMOVE_CONTACT', contactId })
    } catch (err) {
      console.log(err)
    }
  }
}