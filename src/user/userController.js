import * as userSevice from '../user/userService.js';

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createUser = async(req, res) => {
    try {
        const data = req.body;
        const detail = await userSevice.createUser(data);
        if(detail.password)
            detail.password =  undefined;
        return res.status(200).json({
            data: detail,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createBooking = async(req, res) => {
    try {
        const { id } = req.params;
        const ticket = req.body.ticket;
        const detail = await userSevice.createBooking(id, ticket);
        if(detail.password)
            detail.password =  undefined;
        return res.status(200).json({
            data: detail,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


export{
    createUser,
    createBooking,
};
