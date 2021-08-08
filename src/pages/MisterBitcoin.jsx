import { Component } from 'react'
import bitcoinService from '../services/bitcoinService'
import userService from '../services/userService'

export class MisterBitcoin extends Component {
  // state = {
  //   user: null,
  //   bitcoinRate: null
  // }
  // componentDidMount() {
  //   this.loadUser()
  //   this.loadBitcoinRate()
  // }

  // loadUser = () => {
  //   const currUser = userService.getUser()
  //   this.setState({ user: currUser })
  // }
  
  // loadBitcoinRate = async () => {
  //   const rate = await bitcoinService.getRate()
  //   this.setState({ bitcoinRate: rate })
  // }
  render() {
    return (
      <div>
        <h1>Mister Bitcoin</h1>
      </div>
    )
  }
}
