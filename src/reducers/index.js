

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// 通常は以下のようになる
// export default combineReducers({ foo, bar, baz })
