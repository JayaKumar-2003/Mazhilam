import jwt from "jsonwebtoken";

export const generatetoken = () => {
    return jwt.sign(
        {
            _id : user._id,
            name:user.name,
            email:user.email,
            isAdmin: user.isAdmin,
        },
        process.env.Jwt_SECRET,
        {
            expiresIn: '30d',
        }
    );
};
