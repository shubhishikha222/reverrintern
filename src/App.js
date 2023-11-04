import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; // Import 'Switch' here
import { useSelector } from 'react-redux';
import Auth from './component/Auth';
import CounterList from './component/CounterList';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      <Router>
        <header>
          <h1>Counter App</h1>
          <Auth />
        </header>
        <main>
          {user ? (
            <Switch>
              <Route path="/counters">
                <CounterList />
              </Route>
              <Redirect from="/" to="/counters" />
            </Switch>
          ) : (
            <p>Please sign in to access counters.</p>
          )}
        </main>
      </Router>
    </div>
  );
}

export default App;
