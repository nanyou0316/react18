import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducer from './reducer'
import createSagaMidlleWare from 'redux-saga'
import watchSaga  from './saga'
const SagaMidlleWare= createSagaMidlleWare()
const store=createStore(reducer,applyMiddleware(SagaMidlleWare))
SagaMidlleWare.run(watchSaga)
export default store