import jwt from "jsonwebtoken";

export const generatetoken = (user) => {
    console.log('hrllo');
    return jwt.sign(
        {
            _id:user._id,
            name:user.name,
            email:user.email,   
            isAdmin:user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'30d',
        }
    );
};
