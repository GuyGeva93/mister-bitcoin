import React, { Component } from 'react'
import { contactService } from '../services/contactService'
import { ContactFilter } from './ContactFilter'
import { ContactPreview } from './ContactPreview'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'
import { connect } from 'react-redux'

class _ContactList extends Component {

  state = {
    // contacts: null,
    filterBy: {
      term: null
    }
  }

  componentDidMount() {
    this.props.loadContacts()
    // this.loadContacts()
  }

  handleChange = (ev) => {
    this.setState(prevState =>
      ({ filterBy: { ...prevState.filterBy, term: ev.target.value } }), this.loadContacts)
  }

  // loadContacts = async () => {
  //   const { filterBy } = this.state
  //   const contactsToShow = await contactService.getContacts(filterBy)
  //   this.setState({ contacts: contactsToShow })
  // }

  onAddContact = () => {
    this.props.history.push('/edit/')
  }

  onRemoveContact = async (contactId) => {

    this.props.removeContact(contactId)
    // try {
      // const contactsToShow = await contactService.deleteContact(id)
    //   await this.loadContacts()
    //   this.setState({ contacts: contactsToShow })
    // } catch (err) {
    //   console.log('Cannot remove contact =>', err);
    // }
  }

  render() {
    const { contacts } = this.props
    if (!contacts) return <div>Loading..</div>
    return (
      <div className="contact-list-container">
        <ContactFilter handleChange={this.handleChange} />
        <section className="contact-list">
          <section className="add-contact">
            <button className="simple-button add-contact" onClick={this.onAddContact}>+ Add contact</button>
          </section>
          {contacts.map(contact => (
            <ContactPreview contact={contact} key={contact._id} removeContact={this.onRemoveContact} />
          ))}
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactModule.contacts,
    filterBy: state.contactModule.filterBy
  }
}

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  // setFilterBy
}

// Connects the store with the component, injects it to the props
export const ContactList = connect(mapStateToProps, mapDispatchToProps)(_ContactList)
