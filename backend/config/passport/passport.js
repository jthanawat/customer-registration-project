const db = require('../../models');
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt')

const option = {
  secretOrKey : process.env.SECRET_OR_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};


const JWTStrategy = new Strategy(option, async (payload, done) => {
  const targetAdmin = await db.Admin.findOne({
    where: { id: payload.id }
  })

  if (targetAdmin) {
    return done(null, targetAdmin)
  } else {
    return done(null, false)
  }
});

passport.use("jwt", JWTStrategy)