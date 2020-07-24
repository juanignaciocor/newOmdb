const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = mongoose.Schema({
    email: { type: String, required: true },
    age: { type: Number, require: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    favorites: { type: Array, default: [] },
    avatar: { type: String, default: "" }

})


UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

UserSchema.methods.matchPassword = async function (password) {
    console.log(password, this.password)
    const resu = await bcrypt.compare(password, this.password)
    console.log(resu)
    return resu
}

const Model = mongoose.model('user', UserSchema)

module.exports = Model



