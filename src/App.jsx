import { AppHeader } from './cmps/AppHeader';
import { MisterBitcoin } from './pages/MisterBitcoin';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Charts } from './cmps/Charts';
import { ContactList } from './cmps/ContactList';
import { ContactDetails } from './cmps/ContactDetails';
import { ContactEdit } from './cmps/ContactEdit';

export function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/contact/:id" component={ContactDetails} />
          <Route path="/edit/:id?" component={ContactEdit} />
          <Route path="/charts" component={Charts} />
          <Route path="/contact" component={ContactList} />
          <Route path="/" component={MisterBitcoin} />
        </Switch>
      </div>
    </Router>
  )
}