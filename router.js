import { signupAuth } from './controllers/authentication';

export default (app) => {
  app.post('/signup', signupAuth);
};
