const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const { User } = require('../models/index')
// Logueo de usuario con bcryptJs
passport.use('local', new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({ username: username })
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const passwordValidation = await user.matchPassword(password)
            if (!passwordValidation) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch (error) {
            done(error, null)
        }
    }
))

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log(id, "DESERIALIZEEEEEEEEEEEEEE")
    User.findById(id)
        .then(user => {

            console.log(user)
            done(null, user)
        })
});


//Estrategia google
module.exports = passport