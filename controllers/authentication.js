import User from '../models/user';

export const signupAuth = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check if a user exists in the DB
  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      res.send(err);
    }

    // if user does not provide both email and password,
    // sets the HTTP status to 422 and send a message
    if (!email || !password) {
      return res.status(422).json({ message: 'You must provide your email and password' });
    }

    // if email already exists,
    // sets the HTTP status to 422 and send a message
    if (foundUser) {
      return res.status(422).json({ message: 'Email already exists!' });
    }

    // if email does not exist, save it to the DB
    const user = new User({
      email,
      password
    });

    user.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Signup successfully!' });
      }
    });
  });
};
