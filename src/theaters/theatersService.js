import Theaters from './TheatersDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createTheaters = async(data) => {
    try {
        const detail = await Theaters.create(data);
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
const getAllTheaters = async(data) => {
    try {
        let detail;
        if(data){
            detail = await Theaters.find({ address : data });
        }else{
            detail = await Theaters.find();
        }
        return detail;
    } catch (error) {
        return error.message;
    }
};


export{
    createTheaters,
    getAllTheaters,
};
