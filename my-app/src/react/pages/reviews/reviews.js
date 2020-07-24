import React from "react"
import "../oneMovie/index.css"


export default ({ postComment, morePagination, reviews, commentInput, comment, title }) => {
    return (
        <React.Fragment>
            <div className="containerReviews">
                <h2 className="section-heading">{title}</h2>
                <div className="containerComents">
                    {reviews.map((elemento) => {
                        return (
                            <div className="comments" key={elemento._id}>
                                <div className="leftProfile">
                                    <p className="reviewBy">Review by <span className="name">{elemento.userId.username}</span></p>
                                    <div className="containerImage">
                                        <img className="profileImage" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
                                    </div>

                                </div>
                                <div className="review">
                                    <p>{elemento.comments}</p>

                                </div>
                            </div>
                        )
                    })}


                </div>
                <div className="containerMore">
                    <span className="more" onClick={(e) => morePagination(e)}> More </span>
                </div>
                <div className="postReview">
                    <h2 className="section-heading">POST REVIEW</h2>
                    <div className="form__group field">
                        <form onSubmit={(e) => postComment(e)} >
                            <label className="form__label">Comment</label>

                            <textarea
                                className="form__field"
                                rows="8"
                                cols="40"
                                onChange={(e) => commentInput(e.target.value)}
                                value={comment}
                            ></textarea>
                            <input type="submit" value="send"></input>
                        </form>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}