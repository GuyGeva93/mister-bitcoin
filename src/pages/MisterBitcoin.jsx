import { Component } from 'react'
import { ContactList } from '../cmps/ContactList.jsx'
import { bitcoinService } from '../services/bitcoinService.js'
import { contactService } from '../services/contactService.js'
import { userService } from '../services/userService.js'
// import { Contact } from './Contact.jsx'

export class MisterBitcoin extends Component {
  state = {
    user: null,
    contacts: null,
    showContacts: false,
    bitcoinRate: null
  }
  componentDidMount() {
    this.loadUser()
    this.getContacts()
    this.loadBitcoinRate()
  }

  loadUser = () => {
    const currUser = userService.getUser()
    this.setState({ user: currUser })
  }

  getContacts = async () => {
    const contactsToShow = await contactService.getContacts()
    this.setState({ contacts: contactsToShow })
  }

  toggleContacts = () => {
    this.setState({ showContacts: !this.state.showContacts })
  }

  loadBitcoinRate = async () => {
    const rate = await bitcoinService.getRate(1)
    this.setState({ bitcoinRate: rate })
  }

  render() {
    const { user, bitcoinRate, showContacts, contacts } = this.state
    return (
      <div>
        {user && <section className="userDetails">
          <h3>Hello {user.name}</h3>
          <h4>Your balance: {user.coins}BTC</h4>
          <h4>BTC rate: {bitcoinRate}</h4>
        </section>}
        {contacts && <section>
          {showContacts ? <ContactList contacts={contacts} /> : <button onClick={this.toggleContacts}>Contact list</button>}
        </section>}
      </div>
    )
  }
}
