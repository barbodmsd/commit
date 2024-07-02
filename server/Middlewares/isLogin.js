import jst from "jsonwebtoken";

const isLogin = (rew, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    return res.status(401).json({
      status: "error",
      message: "You must be login at the first",
    });
  }
};

export default isLogin;
