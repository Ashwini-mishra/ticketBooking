import Shows from './showsDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createShows = async(data) => {
    try {
        const detail = await Shows.create(data);
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
const getAllShows = async(name, location) => {
    try {
        let detail;
        if(name && location){
            detail = await Shows.find({
                theaters: location ,
                movie: name
            }).populate('theaters').populate('movie');
        }else{
            detail = await Shows.find().populate('theaters').populate('movie');
        }
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
const getShows = async(id) => {
    try {
        const detail = await Shows.findOne({ _id:id }).populate('theaters').populate('movie');
        return detail;
    } catch (error) {
        return error.message;
    }
};


export{
    createShows,
    getAllShows,
    getShows,
};
