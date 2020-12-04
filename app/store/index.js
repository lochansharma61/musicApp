import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import promise from 'redux-promise'

const middleware = applyMiddleware(promise)
export default createStore(reducer, middleware)