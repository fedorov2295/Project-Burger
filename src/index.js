import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux' ;
import { Provider } from 'react-redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder'
import thunk from 'redux-thunk'
import orderReducer from './store/reducers/order'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers ({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
