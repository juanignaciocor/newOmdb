import { combineReducers } from 'redux';
import userReducer from './user'
import moviesReducer from "./movies"
import commentsReducer from "./comments"
export default combineReducers({
    user: userReducer,
    movies: moviesReducer,
    comments: commentsReducer
});