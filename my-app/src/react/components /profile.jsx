import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Profile from "../pages/profile/index"

const ProfileComponent = ({ user }) => {

    return (
        <React.Fragment>
            <Profile user={user} />
        </React.Fragment>
    )
}


const mapStateToProps = function (state, ownprops) {
    return {
        user: state.user.logged
    }
}
const mapDispatchToProps = function (dispatch, ownprops) {
    return {
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(ProfileComponent));
