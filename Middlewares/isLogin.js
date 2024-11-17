import jwt from 'jsonwebtoken'
import HandleError from '../Utils/handleError.js';
const isLogin = () => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const {loginComplete} = jwt.verify(token, process.env.JWT_SECRET);
    if (!loginComplete) {
      return new HandleError("login required", 400);
    }
    return next()
    next();
  } catch (error) {
    return new HandleError('token required', 400);
  }
};

export default isLogin