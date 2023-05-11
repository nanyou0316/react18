import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducer from './rootReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
const store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise))
export default store