import User from '../model/user.js';

import bcrypt from 'bcrypt';


export const signupUser = async(request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 9)
        const user = {
            name: request.body.name,
            username: request.body.username,
            password: hashedPassword,
            email: request.body.email
        }

        const newUser = new User(user);                                     
        await newUser.save();

        return response.status(200).json({msg: 'Signup Successfull!'});
    } catch (error) {
        return response.status(500).json({msg: 'Error while signing up the user'});
    }
}