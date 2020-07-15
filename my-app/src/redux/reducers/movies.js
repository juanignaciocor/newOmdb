import { FETCH_MOVIES, FETCH_MOVIE, TOP_MOVIES } from "../constans/index"

const initialCartState = {
    films: [],
    film: {},
    topMovies: []
}

export default function (state = initialCartState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, films: action.movies }
        case FETCH_MOVIE:
            return { ...state, film: action.movie }
        case TOP_MOVIES:
            return { ...state, topMovies: action.movies }

        default:
            return state;
    }
}
