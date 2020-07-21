import { combineReducers } from 'redux';
import userReducer from './user'
import moviesReducer from "./movies"
import reviewReducer from "./comments"
export default combineReducers({
    user: userReducer,
    movies: moviesReducer,
    review: reviewReducer
});