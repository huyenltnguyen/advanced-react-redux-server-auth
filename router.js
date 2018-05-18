import { signupAuth, signinAuth } from './controllers/authentication';
import passport from 'passport';
import passportService from './services/passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

export default (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.json({ message: 'hi' });
  });

  app.post('/signin', requireSignin, signinAuth);

  app.post('/signup', signupAuth);
};
