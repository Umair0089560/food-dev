import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {

     const {token} = req.headers;
   console.log('token',token)

     if (!token) {
        return res.json({succes: false, message: "Not Authorized Login Again"});
     }
     try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
       
        req.body.userId = token_decode._id;
        next();
     } catch (error) {
        console.log(error);
        res.json({succes: false, message:"Error"})
     }
}

export default authMiddleware;