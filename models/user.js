import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  refreshToken: String,
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
