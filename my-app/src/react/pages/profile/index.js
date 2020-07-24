import React from "react"
import "./index.css"
export default ({ user }) => {
    console.log(user)
    return (
        <div className="profile-container">
            <h2 className="section-next"> Profile</h2>
            <div className="contenidoContainer">
                <div className="datos-Card shadow-drop-2-center">
                    {user.username ? (
                        <React.Fragment>                       ç
                            <div className="profile-left">
                                <h2><span className="bold">Username:</span> {user.username}</h2>
                                <p><span className="bold">Email:</span> {user.email}</p>
                                <p><span className="bold">Age:</span> {user.age}</p>

                            </div>
                            <div className="profile-right"> foto</div>
                        </React.Fragment>

                    ) : (null)}
                </div>
            </div>

        </div>
    )
}