import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {chatuser} from './redux/userchat.redux'

export default combineReducers({user,chatuser})