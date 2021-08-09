import React, { Component } from 'react'
import { contactService } from '../services/contactService'
import { ContactFilter } from './ContactFilter'
import { ContactPreview } from './ContactPreview'

export class ContactList extends Component {

  state = {
    contacts: null,
    filterBy: {
      term: null
    }
  }

  componentDidMount() {
    this.loadContacts()
  }

  handleChange = (ev) => {
    this.setState(prevState =>
      ({ filterBy: { ...prevState.filterBy, term: ev.target.value } }), this.loadContacts)
  }

  loadContacts = async () => {
    const { filterBy } = this.state
    const contactsToShow = await contactService.getContacts(filterBy)
    this.setState({ contacts: contactsToShow })
  }

  onRemoveContact = async (id) => {
    try {
      const contactsToShow = await contactService.deleteContact(id)
      await this.loadContacts()
      this.setState({ contacts: contactsToShow })
    } catch (err) {
      console.log('Cannot remove contact =>', err);
    }
  }

  render() {
    const { contacts } = this.state
    if (!contacts) return <div>Loading..</div>
    return (
      <div className="contact-list-container">
        <ContactFilter handleChange={this.handleChange} />
        <section className="contact-list">
          {contacts.map(contact => (
            <ContactPreview contact={contact} key={contact._id} removeContact={this.onRemoveContact} />
          ))}
        </section>
      </div>
    )
  }
}
