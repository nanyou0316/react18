import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import reducer from './rootReducer'
import reduxThunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['countReducer']
  // whitelist: ['navigation'] 白名单，在里面的只会持久化存储
  // blacklist: ['navigation'] 黑名单，在里面的不会持久化存储
}
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(reduxThunk))
let persistor = persistStore(store)
export { store, persistor }
