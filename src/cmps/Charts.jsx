import { Sparklines, SparklinesLine } from "react-sparklines";

import { Component } from 'react'
import { bitcoinService } from "../services/bitcoinService";

export class Charts extends Component {
  state = {
    marketPrice: null
  }
  componentDidMount() {
    this.loadInfo()
  }

  loadInfo = async () => {
    console.log('loadInfo');
    const marketPrice = await bitcoinService.getMarketPrice()
    this.setState({ marketPrice: marketPrice.values })
    console.log(this.state);
  }
  render() {
    const { marketPrice } = this.state
    if (!marketPrice) return <div>Loading..</div>
    return (
      <div>
        <h2 style={{'textAlign': 'center'}}>Market price</h2>
        <Sparklines data={marketPrice.map(val => [val.y.toFixed()])} >
          <SparklinesLine color="silver" />
        </Sparklines>
      </div>
    )
  }
}

