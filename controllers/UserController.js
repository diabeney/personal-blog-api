import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import { STATUS } from "../utils/utils.js";
import jwt from "jsonwebtoken";

const UserController = {
  registerUser: async (_, res) => {
    try {
      const { name, email, password } = res.validatedBody;
      const user = await User.find({ email });
      if (user) {
        res.status(STATUS.BAD_REQUEST.code).json({ message: "User already exists" });
        return;
      }
      const newUser = new User({
        name,
        email,
        password: await bcrypt.hash(password, 12)
      });
      await newUser.save();
      res.status(201).json({
        status: "success",
        message: "User Registered!"
      });
    } catch (err) {
      console.log(err);
      res.status(STATUS.SERVER_ERROR.code).json(STATUS.SERVER_ERROR.message);
    }
  },
  loginUser: async (_, res) => {
    const { password } = res.validatedBody;
    const user = res.user[0];
    const isUser = await bcrypt.compare(password, user.password);
    try {
      if (isUser) {
        const payload = { email: user.email };
        const accessToken = jwt.sign(payload, process.env.SECRET);
        res.status(201).json({ status: "Success", message: "user logged In", accessToken: accessToken });
      } else {
        res.status(401).json(STATUS.BAD_REQUEST);
      }
    } catch (err) {
      res.status(STATUS.SERVER_ERROR.code).json(STATUS.SERVER_ERROR);
    }
  }
};

export { UserController };
