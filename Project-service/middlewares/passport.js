const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

// Passport local
passport.use(new LocalStrategy({
    usernameField: 'username'
  }, async (username, password, done) => {
    try {
      const user = await User.findOne({ username })
  
      if (!user) return done(null, false)
  
      const isCorrectPassword = await user.isValidPassword(password)
  
      if (!isCorrectPassword) return done(null, false)
  
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  }))

