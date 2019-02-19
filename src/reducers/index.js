

import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
// 通常は以下のようになる
// export default combineReducers({ foo, bar, baz })
