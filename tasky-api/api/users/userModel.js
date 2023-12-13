import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$%^&*])[A-Za-z\d!$%^&*]{8,}$/;

//validator function for the password
const passwordValidator = (password) => {
  return passwordRegex.test(password);
};

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true,
    validate: {
      validator: passwordValidator,
      message: 'Password does not meet the complexity requirements.'
    }
  }
});

export default mongoose.model('User', UserSchema);
