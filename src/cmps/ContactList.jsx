import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      <label htmlFor="searchContact"></label>
      <input type="text" id="searchContact" placeholder="Search contact.." />
      {contacts.map(contact => (
        <ContactPreview contact={contact} key={contact._id} />
      ))}
      {/* {JSON.stringify(contacts)} */}

    </div>
  )
}
