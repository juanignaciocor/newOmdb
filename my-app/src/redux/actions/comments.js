import axios from "axios"


const comments = (comments) => ({
    type: "FETCH_COMMENTS",
    comments
})

const comment = (comment) => ({
    type: "FETCH_COMMENT",
    comment
})

const pageComments = (pageComment) => ({
    type: "FETCH_PAGECOMMENTS",
    pageComment
})



export const postReview = (review) => dispatch => {
    return axios.post(`http://localhost:8080/api/review/movie`, review)
        .then(() => console.log("se Posteo"))
}
export const likeThis = (review) => dispatch => {
    return axios.put("http://localhost:8080/api/review/movie", review)
}
export const fetchMovieReviews = (movieId, page) => dispatch => {
    return axios.get(`http://localhost:8080/api/review/commentsMovie/${movieId}/${page}`)
        .then((res) => dispatch(comments(res.data)))
}

export const postPageREviews = (review) => dispatch => {
    return axios.post("http://localhost:8080/api/review/page", review)
}
export const fetchPageReviews = (page) => dispatch => {
    return axios.get(`http://localhost:8080/api/review/commentsPage/${page}`)
        .then((res) => dispatch(pageComments(res.data)))
}