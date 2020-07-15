const initialCartState = {
    logged: {},
}

export default function (state = initialCartState, action) {
    switch (action.type) {
        case "LOGUED_USER":
            return { ...state, logged: action.logged }


        default:
            return state;
    }
}