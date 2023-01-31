import Joi from 'joi';

/**
 *
 * create user
 */
const create = () =>{
    return Joi.object({
        theaters: Joi.string().required(),
        movie: Joi.string().allow(''),
        date: Joi.string().required(),
        time:Joi.string().required(),
    });
};

export{
    create,
};
