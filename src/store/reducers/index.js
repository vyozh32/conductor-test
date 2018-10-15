import {combineReducers} from 'redux'
import user from '../ducks/user'
import repos from '../ducks/repos';

export default combineReducers({
    user,
    repos
})