import jwt from "jsonwebtoken";

const isLogin=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(' ')[1]
        const {role}=jwt.verify(token,process.env.SECRET)
        next()
    } catch (error) {
        return res.status(401).json({
            status:'fail',
            message:'login required'
        })
    }
}
export default isLogin