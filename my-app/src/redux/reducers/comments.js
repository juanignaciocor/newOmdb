const initialCartState = {
    comments: [],
    comment: {},

}

export default function (state = initialCartState, action) {
    switch (action.type) {
        case "FETCH_COMMENTS":
            return { ...state, comments: action.comments }
        case "FETCH_COMMENT":
            return { ...state, comment: action.comment }


        default:
            return state;
    }
}