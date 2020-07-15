const mongoose = require('mongoose')
const Viewchema = mongoose.Schema({
    movie: { type: Array, required: true },
    count: { type: Number, default: 0 },
    movieId: { type: String, required: true }

})




const Model = mongoose.model('view', Viewchema)

module.exports = Model



