const INITIAL_STATE = {
  contacts: [],
  currContact: null,
  filterBy: null
}
export function contactReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return {
        ...state,
        contacts: action.contacts
      }
    case 'SET_CONTACT':
      return {
        ...state,
        currContact: action.contact
      }
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: action.filterBy
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.contact]
      }
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== action.contactId)
      }
    case 'UPDATE_CONTACT':
      const idx = state.contacts.findIndex(contact => contact._id === action.contact._id)
      return {
        ...state,
        contacts: [...state.contacts, state.contacts.splice(idx, 1, action.contact)]
      }
    default:
      return state
  }
}