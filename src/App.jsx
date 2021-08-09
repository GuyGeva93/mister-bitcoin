import { AppHeader } from './cmps/AppHeader';
import { MisterBitcoin } from './pages/MisterBitcoin';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Charts } from './cmps/Charts';

export function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/charts" component={Charts} />
          <Route path="/" component={MisterBitcoin} />
        </Switch>
      </div>
    </Router>
  )
}