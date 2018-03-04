import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from "./articles";
import dateRange from "./dataPicker";
import comments from "./comments";
    export default combineReducers({
        count: counterReducer,
        articles,
        dateRange,
        comments
    })