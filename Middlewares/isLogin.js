import jwt from 'jsonwebtoken'
import HandleError from '../Utils/handleError.js';
const isLogin = () => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    if (!verify.id) {
      return new HandleError("login", 400);
    }
    req.token = verify;
    next();
  } catch (error) {
    return new HandleError('token required', 400);
  }
};

export default isLogin