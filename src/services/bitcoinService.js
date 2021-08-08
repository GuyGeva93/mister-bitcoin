// import axios from "axios"

async function getRate(coins) {
  // const res = await axios.get(`https:blockchain.info/tobtc?currency=USD&value=${coins}`)
  // return res.data
  return `0.00002244`
}

function getMarketPrice() {
  // Return chart data as described below.
}

function getConfirmedTransactions() {
  // Return chart data as described below.
}

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions
}