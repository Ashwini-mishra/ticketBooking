import User from './userDb.js';
import bcrypt from 'bcrypt';

/**
 *
 * @param {*} data
 * @returns
 */
const createUser = async(data) => {
    try {
        data.password = bcrypt.hashSync(data.password, 10);
        const detail = await User.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};


/**
 *
 * @param {*} data
 * @returns
 */
const createBooking = async(id,ticket) => {
    try {
        const info = await User.findOne({ _id:id }).lean();
        const data = {...info,ticket:ticket };
        const detail = await User.findOneAndUpdate({_id: id }, data, {new :true});
        return detail;
    } catch (error) {
        return error.message;
    }
};


export{
    createUser,
    createBooking,
};
