import * as moviesSevice from '../movies/moviesService.js';

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createMovies = async(req, res) => {
    try {
        const data = req.body;
        const detail = await moviesSevice.createMovie(data);
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
const getAllMovies = async(req, res) => {
    try {
        const data = req.query.name;
        const detail = await moviesSevice.getAllMovie(data);
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
    createMovies,
    getAllMovies
};
