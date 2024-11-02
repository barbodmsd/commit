import jwt from 'jsonwebtoken'
import HandleError from '../Utils/handleError.js';
const isAdmin = () => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    if (verify?.role != "admin") {
      return new HandleError("you do not have permission", 400);
    }
    req.token = verify;
    next();
  } catch (error) {
    return new HandleError('token required', 400);
  }
};

export default isAdmin