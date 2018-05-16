import mongoose, { Model } from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

const User = mongoose.model('User', userSchema);

export default User;
