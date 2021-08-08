import { Component } from 'react'
import { ContactList } from '../cmps/ContactList.jsx'
import { bitcoinService } from '../services/bitcoinService.js'
import contactService from '../services/contactService.js'
import { userService } from '../services/userService.js'

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
    const { user, bitcoinRate, showContacts } = this.state
    return (
      <div>
        <h1>Mister Bitcoin</h1>
        {user && <section className="userDetails">
          <h3>Hello {user.name}</h3>
          <h4>Your balance: {user.coins}BTC</h4>
          <h4>BTC rate: {bitcoinRate}</h4>
        </section>}
        <section className="contact-list">
          {showContacts ? <ContactList /> : <button onClick={() => this.toggleContacts}>Contact list</button>}
        </section>
      </div>
    )
  }
}
