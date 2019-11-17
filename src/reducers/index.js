import {combineReducers} from 'redux';
import CounterReducer from './couter';
import Islogged from './isLogged';

const allReducers=combineReducers({
    Counter:CounterReducer,
    Islogged:Islogged
});
export default allReducers;