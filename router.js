import { signupAuth, signinAuth } from './controllers/authentication';
import passport from 'passport';
import passportService from './services/passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false, failWithError: true });

export default (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.json({ message: 'hi' });
  });

  // handle failed Passport.js authentication without a custom callback
  // REF: https://stackoverflow.com/questions/15388206/sending-back-a-json-response-when-failing-passport-js-authentication
  // REF: https://github.com/jaredhanson/passport/issues/126#issuecomment-32333163
  app.post('/signin', requireSignin, signinAuth, (err, req, res, next) => {
    return res.json({ message: 'Invalid email or password.' });
  });

  app.post('/signup', signupAuth);
};
