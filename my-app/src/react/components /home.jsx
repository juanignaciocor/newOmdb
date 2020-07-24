import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Home from "../pages/home/index"
import { mostViews } from "../../redux/actions/movies"
import Footer from "../pages/footer/index"
import { postPageREviews, fetchPageReviews } from "../../redux/actions/comments"

const HomeComponent = ({ mostViews, topMovies, fetchPageReviews, postPageReviews, user, reviews }) => {
    const [comment, setComment] = useState("")
    const [change, setChange] = useState(false)
    const [page, setPage] = useState(1)
    useEffect(() => {
        mostViews()
            .then(() => fetchPageReviews(page))
    }, [])

    useEffect(() => {
        fetchPageReviews(page)
    }, [page, change])

    const commentInput = (e) => { setComment(e) }

    const morePagination = (e) => {
        e.preventDefault()
        setPage(page + 1)
    }

    const postComment = (e) => {
        e.preventDefault()

        const userComment = { userId: user.id, comments: comment }
        if (comment) {
            postPageReviews(userComment)
                .then(() => {
                    setChange(!change)
                    setComment("")
                })
        }

    }

    return (
        < React.Fragment >
            <Home topMovies={topMovies}
                commentInput={commentInput}
                morePagination={morePagination}
                postComment={postComment}
                reviews={reviews}
                comment={comment}
            ></Home>
            <Footer></Footer>
        </React.Fragment >
    )
}


const mapStateToProps = function (state, ownprops) {
    return {
        topMovies: state.movies.topMovies,
        user: state.user.logged,
        reviews: state.review.Pagecomments



    }
}
const mapDispatchToProps = function (dispatch, ownprops) {
    return {
        mostViews: () => dispatch(mostViews()),
        fetchPageReviews: (page) => dispatch(fetchPageReviews(page)),
        postPageReviews: (comment) => dispatch(postPageREviews(comment))
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(HomeComponent));
