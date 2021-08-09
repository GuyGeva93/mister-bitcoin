import { AppHeader } from './cmps/AppHeader';
import { MisterBitcoin } from './pages/MisterBitcoin';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Charts } from './cmps/Charts';
import { ContactList } from './cmps/ContactList';

export function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/charts" component={Charts} />
          <Route path="/contacts" component={ContactList} />
          <Route path="/" component={MisterBitcoin} />
        </Switch>
      </div>
    </Router>
  )
}