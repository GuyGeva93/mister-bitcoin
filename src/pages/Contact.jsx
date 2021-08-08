import { Component } from 'react'
import { ContactList } from '../cmps/ContactList'

export class Contact extends Component {
  render() {
    return (
      <div>
        {/* <label htmlFor="searchContact"></label>
        <input type="text" id="searchContact" placeholder="Search contact.." /> */}
        <ContactList contacts={this.props.contacts} />
      </div>
    )
  }
}
