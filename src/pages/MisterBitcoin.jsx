import { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService.js'
import { userService } from '../services/userService.js'
import contactImg from '../assets/img/contact.png'
export class MisterBitcoin extends Component {
  state = {
    user: null,
    bitcoinRate: null
  }
  componentDidMount() {
    this.loadUser()
    this.loadBitcoinRate()
  }

  loadUser = () => {
    const currUser = userService.getUser()
    this.setState({ user: currUser })
  }

  loadBitcoinRate = async () => {
    const rate = await bitcoinService.getRate(1)
    this.setState({ bitcoinRate: rate })
  }

  render() {
    const { user, bitcoinRate } = this.state
    return (
      <div>
        {user && <section className="user-details">
          <img src={contactImg} alt="contact" />
          <h3>Hello {user.name}!</h3>
          <h4>Your balance: {user.coins}BTC</h4>
          <h4>BTC rate: {bitcoinRate}</h4>
        </section>}
      </div>
    )
  }
}
