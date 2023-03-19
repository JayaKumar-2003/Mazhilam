import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Jai',
            email:'Jai123@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true,
        },
        
    ],
    details :[
        {
        name :'Jawahar',
        number : '636912838',
        Address : 'm1b30tnhb',
        Pending : '2300',
        History : {
                Description : 'Add 200 in 2016',
                Amount : '200 '
        },
    },
    {
     name :'askar',
    number : '8634287',
    Address : 'm320tnhb',
    Pending : '3300',
    History : {
            Description : 'Add 400 in 2018',
            Amount : '400',
    },
}

]
};

export default data;