import Movie from './moviesDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createMovie = async(data) => {
    try {
        const detail = await Movie.create(data);
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
const getAllMovie = async(data) => {
    try {
        let detail;
        if(data){
            detail = await Movie.find({ name : data });
        }else{
            detail = await Movie.find();
        }
        return detail;
    } catch (error) {
        return error.message;
    }
};


export{
    createMovie,
    getAllMovie
};
