import jwt from "jsonwebtoken";

const isAdmin=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(' ')[1]
        const {role}=jwt.verify(token,process.env.SECRET)
        if(role!='admin'){
            return res.status(401).json({
                status:'fail',
                message:'you don"t have permission'
            })
        }
        return next()
    } catch (error) {
        return res.status(401).json({
            status:'fail',
            message:'token required',
        })
    }
}

export default isAdmin