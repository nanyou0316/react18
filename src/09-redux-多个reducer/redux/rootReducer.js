import { combineReducers } from 'redux'
import {reducer as count} from './Count'
import { reducer as userInfo } from './User'
import { reducer as showHideTabbar } from './User'
export default combineReducers({
  //*分块的数据
  count,userInfo,showHideTabbar
})