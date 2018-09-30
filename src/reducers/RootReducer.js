import { combineReducers } from 'redux';
import newsItemsReducer from './NewsItemsReducer';
import newsSourceReducer from './NewsSourceReducer';
import userInfoReducer from './UserInfoReducer';
import searchReducer from './SearchReducer';
import applicationReducer from './ApplicationReducer'

const rootReducer = combineReducers({
  newsItems: newsItemsReducer,
  newsSourceList: newsSourceReducer,
  userInfo: userInfoReducer,
  searchInfo: searchReducer,
  application: applicationReducer
})

export default rootReducer;
