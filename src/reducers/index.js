

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
// 通常は以下のようになる
// export default combineReducers({ foo, bar, baz })
