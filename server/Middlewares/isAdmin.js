import jwt from "jsonwebtoken";

const isAdmin = (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const { role } = jwt.verify(token, process.env.SECRET_KEY);
    if (role != "admin") {
      return res.status(401).json({
        status: "error",
        message: "You don't have permission",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      status: "error",
      message: "token required",
    });
  }
};

export default isAdmin