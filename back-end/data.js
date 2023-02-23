import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Jai',
            email:'Jai123@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true,
        }
    ]
};

export default data;