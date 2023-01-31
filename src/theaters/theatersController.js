import * as theatersSevice from '../Theaters/TheatersService.js';

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createTheaters = async(req, res) => {
    try {
        const data = req.body;
        const detail = await theatersSevice.createTheaters(data);
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
const getAllTheaters = async(req, res) => {
    try {
        const data = req.query.location;
        const detail = await theatersSevice.getAllTheaters(data);
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
    createTheaters,
    getAllTheaters,
};
