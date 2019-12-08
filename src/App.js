import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore , applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history';
import rootReducer from './reducers'
import LayoutSelector from './Layout/LayoutSelector';

const customHistory = createBrowserHistory();
const store = createStore(rootReducer,applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={customHistory} >
          <Route path="/" component={LayoutSelector} />    
        </Router>
      </Provider>
    );
  }
}

export default App;
