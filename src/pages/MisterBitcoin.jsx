import { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService.js'
import { userService } from '../services/userService.js'
import contactImg from '../assets/img/contact.png'
import Particles from 'react-particles-js'
import { getUser, logout } from '../store/actions/userActions'
import { connect } from 'react-redux'
class _MisterBitcoin extends Component {
  state = {
    bitcoinRate: null
  }

  componentDidMount() {
    this.props.getUser()
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

  // logout = () => {
  //   this.props.logout()
  // }

  render() {
    const { bitcoinRate } = this.state
    const { loggedinUser } = this.props
    if (!loggedinUser) return <div>Loading..</div>
    return (
      <div>
        <Particles className="particles" />
        <section className="user-details">
          <img src={contactImg} alt="contact" />
          <h3>Hello {loggedinUser.name}!</h3>
          <h4>Your balance: {loggedinUser.coins}BTC</h4>
          <h4>BTC rate: {bitcoinRate}</h4>
          <button onClick={this.props.logout} className="simple-button">Logout</button>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedinUser: state.userModule.loggedinUser
  }
}

const mapDispatchToProps = {
  getUser,
  logout
}

// Connects the store with the component, injects it to the props
export const MisterBitcoin = connect(mapStateToProps, mapDispatchToProps)(_MisterBitcoin)

