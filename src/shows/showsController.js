import * as showsSevice from '../shows/showsService.js';

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createShows = async(req, res) => {
    try {
        const data = req.body;
        const detail = await showsSevice.createShows(data);
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
const getAllShows = async(req, res) => {
    try {
        const { theater, movie } = req.query;
        const detail = await showsSevice.getAllShows(movie, theater);
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
    createShows,
    getAllShows,
};
