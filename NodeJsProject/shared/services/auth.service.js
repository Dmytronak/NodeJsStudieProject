const passwordHash = require('../helpers/password-hash.helper');
const db = require('../configs/db.config');
const jwt = require('jsonwebtoken');
const dbUser = db.User;


module.exports = {
    login,
    getAll,
    getById,
    register,
    update,
    deleteById
};

async function getAll() {
    const users = await dbUser.find().select('-hash -salt');
    return users;    
}

async function getById(id) {
    const user = await dbUser.findById(id).select('-hash -salt');;
    return user;    
}

async function login(loginModel) {
    const user = await dbUser.findOne({ email : loginModel.email });
    var hashOfIncomePassword = passwordHash(loginModel.password, user.salt)
    if (user && hashOfIncomePassword.hashPassword === user.hash) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, process.env.JWT_KEY, { expiresIn: process.env.JWT_EXPIRE_TIME });
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function register(registerModel) {
    let ifExistEmail = await dbUser.findOne({ email: registerModel.email });
    if (ifExistEmail) {
        throw `Email ${registerModel.email} is already taken`;
    }

    const userEmail = registerModel.email;
    const userAge = registerModel.age;
    const userFirstName = registerModel.firstName;
    const userLastName = registerModel.lastName;
    const userFullName = `${userFirstName} ${userLastName}`;
    const credentials = passwordHash(registerModel.password);

    const user = new dbUser({
            email:userEmail,
            salt:credentials.salt,
            hash: credentials.hashPassword,
            firstName: userFirstName,
            lastName: userLastName,
            fullName:userFullName,
            age:userAge   
        });

    await user.save();
}

async function update(id, userModel) {
    const user = await dbUser.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== userModel.email && await dbUser.findOne({ email: userModel.email })) {
        throw `Email ${userModel.username} is already taken`;
    }

    // hash password if it was entered
    if (userModel.password) {
        userModel.hash = passwordHash(userModel.password, user.salt)
    }
    if(userModel.firstName || userModel.lastName){
        userModel.fullName = `${userModel.firstName } ${userModel.lastName}`;
    }

    Object.assign(user, userModel);

    await user.save();
}

async function deleteById(id) {
    await dbUser.findByIdAndRemove(id);
}
