import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from 'redux'
import reducer from './rootReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))

const store = createStore(reducer, enhancer)
export default store
