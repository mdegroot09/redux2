import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import hackerNewsReducer from './ducks/hackerNewsReducer';


const store = createStore(hackerNewsReducer, applyMiddleware(promiseMiddleware))
export default store
