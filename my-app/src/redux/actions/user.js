import axios from "axios"


export const logued = (logged) => ({
    type: "LOGUED_USER",
    logged
})



//Loguear usuario
export const loguear = (user) => dispatch => {
    return axios.post(`http://localhost:8080/api/user/logued`, user, { withCredentials: true })
        .then((res) => dispatch(logued(res.data)))
}
//Desloguear usuario
export const desloguear = () => dispatch => {
    return axios.get('http://localhost:8080/api/user/logout', { withCredentials: true })
        .then(() => dispatch(logued({})))
}
//Persistencia de usuario
export const logCookie = () => dispatch => {
    return axios.get("http://localhost:8080/api/user/checkCookie", { withCredentials: true })
        .then((res) => {
            console.log(res.data)
            dispatch(logued(res.data))
        })
}
//Crear usuario
export const createUser = (user) => dispatch => {
    return axios.post('http://localhost:8080/api/user', user)
        .then((res) => dispatch(logued(res.data)))

}
//Agregar usuario a amigos
export const addFriend = (friend) => dispatch => {
    return axios.post('/api/user/addFriend', friend)
}

//Agregar a favoritos
export const addFav = (sendFav) => dispatch => {
    return axios.put('http://localhost:8080/api/user/addFav', sendFav)
}
//Remover de favoritos

export const removeFav = (sendFav) => dispatch => {
    return axios.put("http://localhost:8080/api/user/removeFav", sendFav)
}