import axios from "axios"


export const comments = (comments) => ({
    type: "FETCH_COMMENTS",
    comments
})

export const comment = (comment) => ({
    type: "FETCH_COMMENT",
    comment
})



