import {combineReducers} from 'redux';
import listReducer from '../screens/list/reducer'

 const reducers = combineReducers({
    lists: listReducer,

});
export default reducers