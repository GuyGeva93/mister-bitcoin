import React, { Component } from 'react'
import { contactService } from '../services/contactService'
import { ContactPreview } from './ContactPreview'

export class ContactList extends Component {

  state = {
    contacts: null
  }

  componentDidMount() {
    this.loadContacts()
  }

  loadContacts = async () => {
    const contactsToShow = await contactService.getContacts()
    this.setState({ contacts: contactsToShow })
  }

  toggleContacts = () => {
    this.setState({ showContacts: !this.state.showContacts })
  }

  render() {
    if (!this.state.contacts) return <div>Loading..</div>
    const { contacts } = this.state
    return (
      <div className="contact-list">
        <label htmlFor="searchContact"></label>
        <input type="text" id="searchContact" placeholder="Search contact.." />
        {contacts.map(contact => (
          <ContactPreview contact={contact} key={contact._id} />
        ))}
      </div>
    )
  }
}
