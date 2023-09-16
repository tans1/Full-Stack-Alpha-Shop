const passport = require('passport');
const User = require('../model/user');
require('dotenv').config()


var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


const cookieExtract = (req) => {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies.token;
  }
  return token;
}


var opts = {}
opts.jwtFromRequest = cookieExtract;
opts.secretOrKey = process.env.TOKEN_SECRET;

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
  try {
    const user = await User.findOne({_id : jwt_payload.id}).exec()
    if(user) {
      return done(null,user)
    }
    else {
      return done(null, false)
    }
  }
  catch(err){
    return done(err, false)
  }
}));

