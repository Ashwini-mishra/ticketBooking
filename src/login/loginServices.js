import { MESSAGE } from '../../utils/constants.js';
import User from '../../src/user/userDb.js';
import bcrypt from 'bcrypt';
import { getShows } from '../shows/showsService.js';
/**
 *
 * @param {*} data
 * @returns
 */
const login = async(data) => {
    const { email, password } = data;
    const user = await User.findOne({ email: email }).lean();
    user.booking = await getShows(user.ticket);
    if (!user) {
        return MESSAGE.INVALID_USER_PASSWORD;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return MESSAGE.INVALID_USER_PASSWORD;
    }

    return user;
};

export { login };
