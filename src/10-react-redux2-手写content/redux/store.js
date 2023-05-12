import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducer from './rootReducer'
import reduxThunk from 'redux-thunk'
const store = createStore(reducer,applyMiddleware(reduxThunk))
export default store