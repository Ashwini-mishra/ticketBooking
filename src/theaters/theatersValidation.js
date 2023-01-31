import Joi from 'joi';

/**
 *
 * create user
 */
const create = () =>{
    return Joi.object({
        name: Joi.string().required(),
        address: Joi.string().allow(''),
    });
};

export{
    create,
};
