import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Car, About, Inventory } from './components'
import './styles.css'
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'


const myTitle = "Garner's Car Inventory"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}

    <Router>
      <Switch>

        <Route exact path="/">
            <Home title={myTitle} />
        </Route>
        <Route exact path="/inventory">
            <Inventory></Inventory>
        </Route>
        <Route exact path="/car">
            <Car></Car>
        </Route>
        <Route exact path="/about">
            <About></About>
        </Route>

      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
