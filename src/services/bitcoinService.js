import axios from "axios"
import { storageService } from './storageService'

async function getRate(coins) {
  const rate = storageService.loadFromStorage('rate')
  if (rate) {
    return rate
  }
  try {
    const res = await axios.get(`https:blockchain.info/tobtc?currency=USD&value=${coins}`)
    storageService.saveToStorage('rate', res.data)
    return res.data
  } catch (err) {
    console.log('err =>', err)
  }
}

async function getMarketPrice() {
  const marketPrice = storageService.loadFromStorage('market-price')
  if (marketPrice) {
    return marketPrice
  }

  try {
    const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    storageService.saveToStorage('market-price', res.data)
    return res.data
  } catch (err) {
    console.log('err =>', err)
  }
}

function getConfirmedTransactions() {
  // Return chart data as described below.
}

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions
}