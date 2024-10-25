import jwt from 'jsonwebtoken'
const decode=(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1]
    const decodeToken=jwt.verify(token,process.env.SECRET)
    return decodeToken
}

export default decode