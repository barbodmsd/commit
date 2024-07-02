import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "fullName required"],
      trim: true,
    },
    email: {
      type: String,
      match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, "email invalid"],
      required: [true, "email required"],
      unique: [true, "email already taken"],
    },
    password: {
      type: String,
      required: [true, "password required"],
      minlength: 6,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    blogId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
