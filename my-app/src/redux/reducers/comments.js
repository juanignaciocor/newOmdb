const initialCartState = {
    Moviecomments: [],
    Moviecomment: {},
    Pagecomments: []
}

export default function (state = initialCartState, action) {
    switch (action.type) {
        case "FETCH_COMMENTS":
            return { ...state, Moviecomments: action.comments }
        case "FETCH_COMMENT":
            return { ...state, Moviecomment: action.comment }

        case "FETCH_PAGECOMMENTS":
            return { ...state, Pagecomments: action.pageComment }
        default:
            return state;
    }
}