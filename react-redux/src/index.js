import React from 'react';
import ReactDOM from 'react-dom';

// redux stuff
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'


import App from './components/App/App';
import './index.css';

// apply middleware promise
const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore) // will return a function aka higher order function

// same as 
// const withMiddleware = applyMiddleware(promiseMiddleware)
// const storeWithMiddleware = withMiddleware(createStore)

// if it is not set in reducers file
// const store = createStore(reducers, defaultstate, applyMiddleware(promiseMiddleware))


ReactDOM.render(
    <Provider store={storeWithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('root')
);