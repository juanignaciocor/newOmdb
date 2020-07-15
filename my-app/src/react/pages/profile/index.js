import React from "react"

export default ({ user }) => {
    console.log(user)
    return (
        <div>
            {user.username ? (
                <div>
                    <p>Profile {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>

                </div>
            ) : (null)}

        </div>
    )
}