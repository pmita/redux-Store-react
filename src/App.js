import React from 'react';
//import everything react router related
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//importing our routing components/pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
//importing our components
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/products' component={Products} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
